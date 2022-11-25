import { Box, LevelInfo } from '../types'

// 判断选中元素是否可以消除
export const canIRemoveThem = (
  checkedItems: [Box, Box],
  boxes: Box[],
  levelInfo: LevelInfo
): [boolean, Box[]] => {
  const _crossItems: Box[] = []

  // 非相同元素或是空元素 无需判断
  if (checkedItems[0].seq !== checkedItems[1].seq || checkedItems[0].seq === 0) {
    return [false, []]
  }

  // 1. 两者相邻
  if (isAdjacent(...checkedItems)) {
    return [true, []]
  }

  // 2. 两者在同一条直线
  if (isCollinear(...checkedItems, boxes)) {
    return [true, checkedItems]
  }

  // 3. 两者可以通过一个拐角连接
  if (canConnectedByACorner(...checkedItems, boxes, _crossItems)) {
    const c = [...checkedItems]
    c.splice(1, 0, ..._crossItems)
    return [true, c]
  }

  // 4. 两者可以通过一条直线 + 一个拐角连接
  if (canConnectedByTwoCorners(...checkedItems, boxes, levelInfo, _crossItems)) {
    const c = [...checkedItems]
    c.splice(1, 0, ..._crossItems)
    return [true, c]
  }

  return [false, []]
}

export const isEmpty = (item: Box): boolean => item.seq === 0

/**
 * 是否为两个相邻的元素
 * @example
 * [ ][-][-][-]
 * [-][A][B][-]
 * [ ][-][ ][ ]
 */
export const isAdjacent = (item1: Box, item2: Box): boolean => {
  if (item1.x === item2.x && Math.abs(item1.y - item2.y) === 1) {
    return true
  }
  if (item1.y === item2.y && Math.abs(item1.x - item2.x) === 1) {
    return true
  }

  return false
}

/**
 * 两个元素是否在同一条直线上
 * @example
 * [A][ ][B][-]
 * [-][-][ ][-]
 * [-][-][ ][-]
 */
export const isCollinear = (item1: Box, item2: Box, boxes: Box[], levelInfo?: LevelInfo): boolean => {
  // 相邻元素
  if (isAdjacent(item1, item2)) {
    return true
  }

  // 位于边界上的元素
  if (levelInfo && !levelInfo.useBoundary) {
    if (
      (item1.x === item2.x && item1.x === 0) ||
      (item1.y === item2.y && item2.y === 0) ||
      (item1.x === item2.x && item1.x === levelInfo.column + 1) ||
      (item1.y === item2.y && item1.y === levelInfo.row + 1)
    ) {
      return true
    }
  }

  return (['x', 'y'] as ['x', 'y']).some(key => {
    const anotherKey = key === 'x' ? 'y' : 'x'

    if (item1[key] === item2[key]) {
      const [min, max] = [Math.min(item1[anotherKey], item2[anotherKey]), Math.max(item1[anotherKey], item2[anotherKey])]
      const inLineItems = boxes.filter(item => item[key] === item1[key] && item[anotherKey] > min && item[anotherKey] < max)

      // 同一直线上都是空元素
      if (inLineItems.length === 0) return false

      return inLineItems.every(item => isEmpty(item))
    }
    return false
  })
}

/**
 * 两个元素是否可以通过一个拐角连接
 * @example
 * [A][ ][ ][-]
 * [-][-][ ][-]
 * [-][-][B][-]
 */
export const canConnectedByACorner = (
  item1: Box,
  item2: Box,
  boxes: Box[],
  _crossItems: Box[],
  levelInfo?: LevelInfo
): boolean => {
  // 找到两个元素相交元素
  // 会存在 C、D 两个元素
  // [A][ ][D][-]
  // [-][-][ ][-]
  // [C][-][B][-]

  // [B][ ][D][-]
  // [-][-][ ][-]
  // [C][-][A][-]

  // [C][ ][A][-]
  // [-][-][ ][-]
  // [B][-][D][-]

  // [C][ ][B][-]
  // [-][-][ ][-]
  // [A][-][D][-]

  // 如果没有边界限制，则增加四条直线对应的边界点
  const _boxes = [...boxes]
  if (levelInfo && !levelInfo.useBoundary) {
    _boxes.push(
      { x: 0, y: item1.y, seq: 0, status: 'checked' },
      { x: levelInfo.column + 1, y: item1.y, seq: 0, status: 'checked' },
      { x: item1.x, y: 0, seq: 0, status: 'checked' },
      { x: item1.x, y: levelInfo.row + 1, seq: 0, status: 'checked' },

      { x: 0, y: item2.y, seq: 0, status: 'checked' },
      { x: levelInfo.column + 1, y: item2.y, seq: 0, status: 'checked' },
      { x: item2.x, y: 0, seq: 0, status: 'checked' },
      { x: item2.x, y: levelInfo.row + 1, seq: 0, status: 'checked' }
    )
  }

  // 取出 C D 两个点
  const crossItems = _boxes.filter(item => (
    // C
    (isEmpty(item) && item.x === item1.x && item.y === item2.y) ||
    // D
    (isEmpty(item) && item.x === item2.x && item.y === item1.y)
  ))

  // 取出相交点，需要做消除连线
  const crossItem = crossItems.find(item => (
    isCollinear(item1, item, _boxes, levelInfo) && isCollinear(item2, item, _boxes, levelInfo)
  ))

  if (crossItem) {
    _crossItems.push(crossItem)
    return true
  }

  return false
}

/**
 * 两个元素是否可以通过一条直线(或相邻) + 一个拐角连接
 * @example
 * [A][ ][ ][-]
 * [-][-][ ][-]
 * [-][-][ ][B]
 * @example
 * [ ][A][-][-]
 * [ ][-][-][-]
 * [ ][ ][B][-]
 */
export const canConnectedByTwoCorners = (
  item1: Box,
  item2: Box,
  boxes: Box[],
  levelInfo: LevelInfo,
  _crossItems: Box[]
): boolean => {
  // 在过 A 的两条直线上寻找一个点，它满足 canConnectedByACorner 的条件
  // 在过 B 的两条直线上寻找一个点，它满足 canConnectedByACorner 的条件
  return [item1, item2].some(currentItem => {
    const anotherItem = item1 === currentItem ? item2 : item1
    const throughItems: Box[] = [] // 收集经过点
    // 增加边界元素
    const _boxes = [...boxes]
    if (!levelInfo.useBoundary) {
      _boxes.push(
        { x: 0, y: currentItem.y, seq: 0, status: 'default' },
        { x: levelInfo.column + 1, y: currentItem.y, seq: 0, status: 'default' },
        { x: currentItem.x, y: 0, seq: 0, status: 'default' },
        { x: currentItem.x, y: levelInfo.row + 1, seq: 0, status: 'default' }
      )
    }

    const crossAItems = boxesSort(_boxes.filter(item => (
      isEmpty(item) &&
      ((item.x === currentItem.x && item.y !== currentItem.y && isCollinear(item, currentItem, _boxes)) ||
      (item.y === currentItem.y && item.x !== currentItem.x && isCollinear(item, currentItem, _boxes)))
    )).map(item => unref(item)), currentItem)

    const item = crossAItems.find(item => {
      return canConnectedByACorner(
        anotherItem,
        item,
        _boxes,
        _crossItems,
        levelInfo
      )
    })

    if (item) {
      throughItems.push(item)
      _crossItems.unshift(item)
      return true
    }

    return false
  })
}

// 排序
export const boxesSort = (source: Box[], compareItem: Box): Box[] => {
  return [...source].sort((a, b) => {
    if (a.y === b.y) {
      if (Math.abs(a.x - compareItem.x) < Math.abs(b.x - compareItem.x)) {
        return -1
      } else {
        return 1
      }
    }
    if (a.x === b.x) {
      if (Math.abs(a.y - compareItem.y) < Math.abs(b.y - compareItem.y)) {
        return -1
      } else {
        return 1
      }
    }

    return -1
  })
}
