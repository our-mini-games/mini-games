import { Point } from '../libs/Point'

type CurryFunction<T> = (arg: T) => T | CurryFunction<T>
type ComposeFunction = <T>(...funcs: Array<(arg: T) => T>) => (arg: T) => T

export const inRange = (val: number, [min, max]: [number, number]): boolean =>
  val >= min && val <= max

export const getDiffVal = (v1: number, v2: number): number =>
  Math.abs(v1 - v2)

export const isEqual = (v1: unknown, v2: unknown): boolean => v1 === v2

export const compose: ComposeFunction = (...funcs) => (arg) => {
  return funcs.reduceRight((acc, func) => func(acc), arg)
}

export const toCurry = <T>(fn: (...args: T[]) => T, arity = fn.length): (arg: T) => T | CurryFunction<T> => {
  return function curried (...args: T[]): T | CurryFunction<T> {
    if (args.length >= arity) {
      return fn(...args)
    } else {
      return (...nextArgs: T[]) => curried(...args.concat(nextArgs))
    }
  }
}

/**
 * 求圆外某一点做圆切线的切点坐标
 * @param r - 圆的半径
 * @param C - 圆心坐标
 * @param P - 圆外的某个点
 */
export const getTangentPoint = (r: number, C: Point, P: Point): [Point, Point] => {
  // 点到圆心的距离
  const d = Math.sqrt(Math.pow(C.x - P.x, 2) + Math.pow(C.y - P.y, 2))
  const theta = Math.acos(r / d)
  const vc1c2 = { x: P.x - C.x, y: -P.y + C.y } // 屏幕坐标系与笛卡尔坐标系是y轴是反着的

  let radC1C2 = Math.acos(vc1c2.x / Math.sqrt(Math.pow(vc1c2.x, 2) + Math.pow(vc1c2.y, 2)))

  if (P.y < C.y) {
    return [
      { x: C.x + Math.cos(theta + radC1C2) * r, y: C.y - Math.sin(theta + radC1C2) * r },
      { x: C.x + Math.cos(theta - radC1C2) * r, y: C.y + Math.sin(theta - radC1C2) * r }
    ]
  }

  radC1C2 = Math.PI - radC1C2

  return [
    { x: C.x + Math.cos(Math.PI - theta - radC1C2) * r, y: C.y + Math.sin(Math.PI - theta - radC1C2) * r },
    { x: C.x + Math.cos(Math.PI - (theta - radC1C2)) * r, y: C.y - Math.sin(Math.PI - (theta - radC1C2)) * r }
  ]
}

export const deepClone = () => {
  
}
