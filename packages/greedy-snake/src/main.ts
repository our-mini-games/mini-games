import GameCanvas from './lib/GameCanvas'
import { wrapperSize, snakeSize } from './config'

import './style.css'
import GreedySnake from './lib/GreedySnake'
import { GAME_OVER, PAUSED, PLAYING } from './config/constants'

window.addEventListener('DOMContentLoaded', () => {
  const { width, height } = wrapperSize
  const gameCanvas = new GameCanvas('#app', {
    width: width * snakeSize,
    height: height * snakeSize,
    snakeSize
  })

  const greedySnake = new GreedySnake(gameCanvas, width, height)

  const oFinished = document.querySelector<HTMLDivElement>('#J_finished')
  const oPaused = document.querySelector<HTMLDivElement>('#J_paused')

  greedySnake.on(GAME_OVER, (len: number) => {
    if (oFinished) {
      oFinished.style.display = 'block'

      const oLength = oFinished.querySelector('#J_length')
      const oBtnAgain = oFinished.querySelector<HTMLElement>('.btn-again')

      if (oLength) {
        oLength.textContent = `${len}`
      }

      if (oBtnAgain) {
        oBtnAgain.onclick = () => {
          greedySnake.init()
          oFinished.style.display = 'none'
        }
      }
    }
  })

  greedySnake.on(PAUSED, () => {
    if (oPaused) {
      oPaused.style.display = 'block'

      const oPlay = oPaused.querySelector<HTMLElement>('.btn-play')

      if (oPlay) {
        oPlay.onclick = () => {
          oPaused.style.display = 'none'
          greedySnake.play()
        }
      }
    }
  })

  greedySnake.on(PLAYING, () => {
    if (oPaused) {
      oPaused.style.display = 'none'
    }
  })
})
