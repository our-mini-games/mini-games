import { renderGameArea, renderHome, renderInfo, renderRocker } from './lib/Renderer'
import { EXIT } from './config/constants'
import { createContext, createGreedySnake } from './lib/GreedySnake'
import './style.css'

const startGame = (): void => {
  const context = createContext()

  const mainAreaSize = context.mainAreaSize

  const footerAreaSize = context.footerAreaSize

  const oRoot = document.querySelector<HTMLElement>('#app')!
  const oFooter = document.createElement('footer')
  oFooter.style.cssText = `
    display: flex;
    align-items: center;
    width: ${mainAreaSize.width}px;
    height: ${footerAreaSize.height}px;
  `

  const gameCanvas = renderGameArea(context)

  const rockerCanvas = renderRocker(context)
  const infoCanvas = renderInfo(context)

  gameCanvas.mount(oRoot)
  rockerCanvas.mount(oFooter)
  infoCanvas.mount(oFooter)
  oRoot.appendChild(oFooter)

  const { init, destroy } = createGreedySnake(context)
  init()

  context.emitter.on(EXIT, () => {
    destroy()
    rockerCanvas.unmount()
    infoCanvas.unmount()
    gameCanvas.unmount()
    oRoot.removeChild(oFooter)

    const home = renderHome('#app', () => {
      home.unmount()
      startGame()
    })
    home.mount()
  })
}

window.addEventListener('DOMContentLoaded', () => {
  const home = renderHome('#app', () => {
    home.unmount()
    startGame()
  })
  home.mount()
})
