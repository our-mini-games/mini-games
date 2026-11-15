import '../../arcade-theme/theme.css'
import { renderGameArea, renderHome, renderInfo, renderRocker } from './lib/Renderer.js'
import { EXIT } from './config/constants.js'
import { createContext, createGreedySnake } from './lib/GreedySnake.js'
import './style.css'

const startGame = (): void => {
  const context = createContext()

  const footerAreaSize = context.footerAreaSize

  const oRoot = document.querySelector<HTMLElement>('#app')!
  const oFooter = document.createElement('footer')
  oFooter.className = 'snake-hud'
  oFooter.style.minHeight = `${footerAreaSize.height}px`

  const gameCanvas = renderGameArea(context)

  const rockerCanvas = renderRocker(context)
  const info = renderInfo(context)

  gameCanvas.mount(oRoot)
  rockerCanvas.mount(oFooter)
  info.mount(oFooter)
  oRoot.appendChild(oFooter)

  const { init, destroy } = createGreedySnake(context)
  init()

  context.emitter.on(EXIT, () => {
    destroy()
    rockerCanvas.unmount()
    info.unmount()
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
