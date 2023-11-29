const PIXEL_RATIO = (function () {
  const c = document.createElement('canvas')
  const ctx = c.getContext('2d') as any
  const dpr = window.devicePixelRatio || 1
  const bsr = ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1

  return dpr / bsr
})()

export const setCanvasDPI = (canvas: HTMLCanvasElement, ratio: number = PIXEL_RATIO): void => {
  const { width, height } = canvas
  Object.assign(canvas, { width: width * ratio, height: height * ratio })

  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  canvas.getContext('2d')!.setTransform(ratio, 0, 0, ratio, 0, 0)
}

export const createCanvas = (width: number, height: number, ratio: number = PIXEL_RATIO): HTMLCanvasElement => {
  const canvas = document.createElement('canvas')
  Object.assign(canvas, { width, height })

  setCanvasDPI(canvas, ratio)
  return canvas
}
