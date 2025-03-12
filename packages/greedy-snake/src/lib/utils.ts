import { Orientation } from '../config/index.js'
import { Coordinate } from '../types/index.js'

export const rangeRandom = (min: number, max: number): number => Math.round(Math.random() * (max - min)) + min

export const createCanvas = (width = 400, height = 300, canvas?: HTMLCanvasElement): HTMLCanvasElement => {
  const c = canvas ?? document.createElement('canvas')

  c.style.width = `${width}px`
  c.style.height = `${height}px`

  const dpr = window.devicePixelRatio ?? 1

  c.width = Math.floor(dpr * width)
  c.height = Math.floor(dpr * height)

  c.getContext('2d')!.scale(dpr, dpr)

  return c
}

/**
 * 获取元素相对于另一个元素的方向
 * @param target 目标元素坐标
 * @param current 参考元素坐标
 * @returns 方向
 */
export const getOrientation = ({ x: x1, y: y1 }: Coordinate, { x: x2, y: y2 }: Coordinate): Orientation => {
  if (x1 === x2) {
    if (y1 - y2 === 1) {
      return Orientation.bottom
    }
    if (y1 - y2 === -1) {
      return Orientation.top
    }

    if (y1 - y2 < -1) {
      return Orientation.bottom
    }
    if (y1 - y2 > 1) {
      return Orientation.top
    }
  }
  if (y1 === y2) {
    if (x1 - x2 === 1) {
      return Orientation.right
    }
    if (x1 - x2 === -1) {
      return Orientation.left
    }

    if (x1 - x2 < -1) {
      return Orientation.right
    }
    if (x1 - x2 > 1) {
      return Orientation.left
    }
  }

  return Orientation.right
}

export const getControlPoints = (prev: Orientation, next: Orientation, startPoint: Coordinate, endPoint: Coordinate): Coordinate | null => {
  // top -> bottom
  if (prev === Orientation.top && next === Orientation.bottom) {
    // return {
    //   x: -width / 2,
    //   y: 0
    // }
    return null
  }

  // top -> right
  if (prev === Orientation.top && next === Orientation.right) {
    return {
      x: startPoint.x,
      y: endPoint.y
    }
  }

  // top -> left
  if (prev === Orientation.top && next === Orientation.left) {
    return {
      x: startPoint.x,
      y: endPoint.y
    }
  }

  // bottom -> top
  if (prev === Orientation.bottom && next === Orientation.top) {
    // return {
    //   x: -width / 2,
    //   y: 0
    // }
    return null
  }

  // bottom -> right
  if (prev === Orientation.bottom && next === Orientation.right) {
    return {
      x: startPoint.x,
      y: endPoint.y
    }
  }

  // bottom -> left
  if (prev === Orientation.bottom && next === Orientation.left) {
    return {
      x: startPoint.x,
      y: endPoint.y
    }
  }

  // left -> top
  if (prev === Orientation.left && next === Orientation.top) {
    return {
      x: endPoint.x,
      y: startPoint.y
    }
  }

  // left -> right
  if (prev === Orientation.left && next === Orientation.right) {
    // return {
    //   x: 0,
    //   y: -height / 2
    // }

    return null
  }

  // left -> bottom
  if (prev === Orientation.left && next === Orientation.bottom) {
    return {
      x: endPoint.x,
      y: startPoint.y
    }
  }

  // right -> top
  if (prev === Orientation.right && next === Orientation.top) {
    return {
      x: endPoint.x,
      y: startPoint.y
    }
  }

  // right -> bottom
  if (prev === Orientation.right && next === Orientation.bottom) {
    return {
      x: endPoint.x,
      y: startPoint.y
    }
  }

  // right -> left
  if (prev === Orientation.right && next === Orientation.left) {
    // return {
    //   x: -height / 2,
    //   y: 0
    // }
    return null
  }

  return null
}

export const roundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number): void => {
  ctx.save()
  ctx.translate(x, y)
  ctx.beginPath()
  ctx.moveTo(0, radius)
  ctx.quadraticCurveTo(0, 0, radius, 0)
  ctx.lineTo(width - radius, 0)
  ctx.quadraticCurveTo(width, 0, width, radius)
  ctx.lineTo(width, height - radius)
  ctx.quadraticCurveTo(width, height, width - radius, height)
  ctx.lineTo(radius, height)
  ctx.quadraticCurveTo(0, height, 0, height - radius)
  ctx.closePath()
  ctx.restore()
}
