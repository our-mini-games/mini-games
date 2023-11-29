import { createGameInterface } from './libs/GameInterface'

const { canvas } = createGameInterface()

const oApp = document.querySelector('#app')!
canvas.id = 'canvas'

oApp.appendChild(canvas)
