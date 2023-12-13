import { Camp } from '@/definitions'

interface TextItem {
  text: string
  x: number
  y: number
  ratio: number
  color: string
}

interface ImageItem {
  img: HTMLImageElement
  x: number
  y: number
  alpha: number
}

type Circle = [number, number, number]

interface Value {
  text?: TextItem[]
  circle?: Circle[]
  image?: ImageItem
}

export type AnimationType = 'check' | 'check-mate' | 'win'

export interface AnimationOptions {
  width: number
  height: number
  resource: {
    swordPic: HTMLImageElement
    winPic: HTMLImageElement
  }
  stopCallback: (type: AnimationType, camp?: Camp) => void
}

interface AnimationExecutor {
  run: () => void
  stop: () => void
}

export interface AnimationReturnType {
  check: AnimationExecutor
  checkMate: AnimationExecutor
  blackWin: AnimationExecutor
  redWin: AnimationExecutor
}

export const createAnimation = (
  ctx: CanvasRenderingContext2D,
  { width, height, resource, stopCallback }: AnimationOptions
): AnimationReturnType => {
  function drawText (text: string, x: number, y: number, ratio = 1, color = '#f6d59a'): void {
    ctx.save()
    ctx.scale(ratio, ratio)
    ctx.beginPath()

    const gradient = ctx.createLinearGradient(-0, -2 * Math.abs(x), 0, 2 * Math.abs(y))

    gradient.addColorStop(0, '#fff')
    gradient.addColorStop(0.5, color)
    gradient.addColorStop(1, '#fff')

    ctx.fillStyle = gradient
    ctx.strokeStyle = 'rgba(0,0,0,0.6)'
    ctx.lineWidth = 1

    ctx.font = 'normal 64px STXINGKAI'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    ctx.shadowBlur = 6
    ctx.shadowColor = 'rgba(0,0,0,0.4)'
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY = 4

    ctx.fillText(text, x, y)
    ctx.shadowBlur = 0
    ctx.shadowColor = 'rgba(0,0,0,0)'
    ctx.strokeText(text, x, y)
    ctx.restore()
  }

  function drawCirclePoint (x: number, y: number, r: number): void {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  function drawImage ({ img, x, y, alpha }: ImageItem): void {
    ctx.save()
    ctx.globalAlpha = alpha
    ctx.drawImage(img, x, y)
    ctx.restore()
  }

  function clear (): void {
    ctx.clearRect(0, 0, width, height)
  }

  function draw (value: Value): void {
    ctx.save()
    ctx.translate(width / 2, height / 2)

    const { text, circle, image } = value

    if (image) {
      drawImage(image)
    }
    if (circle) {
      circle.forEach(item => {
        drawCirclePoint(...item)
      })
    }

    if (text) {
      text.forEach(item => {
        drawText(item.text, item.x, item.y, item.ratio, item.color)
      })
    }

    ctx.restore()
  }

  const registerCheckAnimation = (): AnimationReturnType['check'] => {
    function init (): {
      points: Circle[]
      textList: TextItem[]
      value: Value
    } {
      let r = 5
      const outerRadius = 32
      const step = Math.PI / 180
      const points: Circle[] = Array.from({ length: 145 }, (_, index) => {
      // eslint-disable-next-line no-return-assign
        return [
          outerRadius * Math.cos(index * 2 * step),
          outerRadius * Math.sin(index * 2 * step),
          (r -= step * 2, Math.max(1, r + step * 2))
        ] as Circle
      })

      const textList = [
        {
          text: '将',
          x: -16,
          y: -12,
          ratio: 2,
          color: '#f6d59a'
        },
        {
          text: '军',
          x: 16,
          y: 12,
          ratio: 2,
          color: '#f6d59a'
        }
      ]

      const value: Value = {
        text: [textList.shift()!],
        circle: []
      }

      return {
        value,
        textList,
        points
      }
    }

    function run (value: Value, textList: TextItem[], points: Circle[]): void {
      reqId = requestAnimationFrame(() => run(value, textList, points))

      const lastText = value.text!.at(-1)
      if (lastText!.ratio > 1) {
        lastText!.ratio -= 0.1
      } else if (textList.length > 0) {
        value.text!.push(textList.shift()!)
      } else {
        value.circle!.push(
          ...points.splice(0, 10)
        )
      }

      clear()
      draw(value)

      if (points.length <= 0) {
        stop()
      }
    }

    function stop (): void {
      cancelAnimationFrame(reqId)
      stopCallback('check')
    }

    return {
      run: () => {
        const { value, textList, points } = init()
        run(value, textList, points)
      },
      stop
    }
  }

  const registerCheckMateAnimation = (img: HTMLImageElement): AnimationReturnType['checkMate'] => {
    function init (): {
      textList: TextItem[]
      value: Value
    } {
      const textList = [
        {
          text: '绝',
          x: -16,
          y: -12,
          ratio: 2,
          color: '#f40'
        },
        {
          text: '杀',
          x: 16,
          y: 12,
          ratio: 2,
          color: '#f40'
        }
      ]

      const value = {
        text: [textList.shift()!],
        image: {
          img,
          x: -45,
          y: -64,
          alpha: 0
        }
      }
      return {
        textList,
        value
      }
    }

    function run (value: Value, textList: TextItem[]): void {
      reqId = requestAnimationFrame(() => run(value, textList))

      const lastText = value.text!.at(-1)
      if (lastText!.ratio > 1) {
        lastText!.ratio -= 0.1
      } else if (textList.length > 0) {
        value.text!.push(textList.shift()!)
      } else {
        value.image!.alpha += 0.05
      }

      clear()
      draw(value)

      if (value.image!.alpha > 1) {
        stop()
      }
    }

    function stop (): void {
      cancelAnimationFrame(reqId)
      stopCallback('check-mate')
    }

    return {
      run: () => {
        const { textList, value } = init()
        run(value, textList)
      },
      stop
    }
  }

  const registerWinAnimation = (img: HTMLImageElement, camp: Camp): AnimationReturnType['blackWin'] => {
    function init (): { text: TextItem, value: Value } {
      const text: TextItem = {
        text: `${camp === 0 ? '红' : '黑'}胜`,
        x: 0,
        y: 32,
        ratio: 2,
        color: camp === 0 ? '#f40' : '#000'
      }

      const value: Value = {
        image: {
          img,
          x: -145,
          y: -96,
          alpha: 0
        },
        text: []
      }

      return {
        text,
        value
      }
    }

    function run (text: TextItem, value: Value): void {
      reqId = requestAnimationFrame(() => run(text, value))

      if (value.image!.alpha < 1) {
        value.image!.alpha += 0.05
      } else {
        if (value.text!.length === 0) {
          value.text!.push(text)
        }
        const lastText = value.text!.at(-1)!
        if (lastText.ratio > 1) {
          lastText.ratio -= 0.1
        }
      }

      clear()
      draw(value)

      if (value.text?.at(-1) && value.text.at(-1)!.ratio <= 1) {
        stop()
      }
    }

    function stop (): void {
      cancelAnimationFrame(reqId)
      stopCallback('win', camp)
    }

    return {
      run: () => {
        const { text, value } = init()
        run(text, value)
      },
      stop
    }
  }

  let reqId: number

  return {
    check: registerCheckAnimation(),
    checkMate: registerCheckMateAnimation(resource.swordPic),
    redWin: registerWinAnimation(resource.winPic, 0),
    blackWin: registerWinAnimation(resource.winPic, 1)
  }
}
