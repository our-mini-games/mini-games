import Arkanoid, { ArkanoidStatus } from './lib/Arkanoid'
import Layout from './lib/Layout'

import './assets/style.css'

const win: any = window

win._on = win.addEventListener
win._off = win.removeEventListener
win._emit = (type: string, data: any) => win.dispatchEvent(new CustomEvent(type, { detail: data }))
win._once = (type: string, listener: EventListener) => win.addEventListener(type, listener, { once: true, capture: true })

const init = (): void => {
  const arkanoid = new Arkanoid(
    new Layout('.arkanoid'),
    {
      width: 24,
      height: 32,
      cx: 0,
      cy: 0,
      cz: 0
    }
  )

  const btnBack = document.querySelector<HTMLButtonElement>('.btn-back')
  const btnRestart = document.querySelector<HTMLButtonElement>('.btn-restart')
  const btnCtrl = document.querySelector<HTMLButtonElement>('.btn-ctrl')
  const btnLeft = document.querySelector<HTMLButtonElement>('.btn-left')
  const btnRight = document.querySelector<HTMLButtonElement>('.btn-right')

  if (!btnBack || !btnRestart || !btnCtrl || !btnLeft || !btnRight) {
    throw new Error('GG')
  }

  btnBack.addEventListener('click', () => {
    window.location.href = '/mini-games'
  })

  btnRestart.addEventListener('click', () => {
    arkanoid.restart()
  })

  btnCtrl.addEventListener('click', () => {
    switch (arkanoid.status) {
      case 'playing':
        arkanoid.pause()
        break
      case 'over':
      case 'win':
        arkanoid.restart()
        break
      case 'paused':
      default:
        arkanoid.start()
        break
    }
  })

  btnLeft.addEventListener('click', () => {
    arkanoid.moveBaffle('left')
  })

  btnRight.addEventListener('click', () => {
    arkanoid.moveBaffle('right')
  })

  win.addEventListener('keydown', (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowLeft':
      case 'KeyA':
        arkanoid.moveBaffle('left')
        break
      case 'ArrowRight':
      case 'KeyD':
        arkanoid.moveBaffle('right')
        break
      case 'Space':
        btnCtrl.click()
        break
    }
  })

  win._on('status', ({ detail: status }: { detail: ArkanoidStatus }) => {
    switch (status) {
      case 'playing':
        btnCtrl.textContent = '游戏中'
        break
      case 'paused':
        btnCtrl.textContent = '暂停中'
        break
      case 'over':
        btnCtrl.textContent = '游戏结束'
        break
      case 'win':
        btnCtrl.textContent = '游戏胜利'
        break
      default:
        btnCtrl.textContent = '开始游戏'
        break
    }
  })
}

window.addEventListener('DOMContentLoaded', init)
