import Hammer from 'hammerjs'
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

  const controls = document.querySelector<HTMLDivElement>('.controls')
  const target = document.querySelector<HTMLDivElement>('.target')

  if (!btnBack || !btnRestart || !btnCtrl || !target || !controls) {
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

  win.addEventListener('dblclick', (e: MouseEvent) => {
    e.preventDefault()
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

  const hammer = new Hammer(target)

  hammer.get('pan').set({
    threshold: 10,
    direction: Hammer.DIRECTION_HORIZONTAL
  })

  let startTime = performance.now()
  let startX = 0
  hammer.on('panstart', (e) => {
    e.target.classList.add('active')
    startTime = performance.now()
    startX = e.center.x
  })

  hammer.on('panmove', (e) => {
    e.target.style.transform = `translateX(${Math.max(Math.min(e.deltaX, 123), -123)}px)`
    const nowTime = performance.now()
    if (nowTime - startTime > 32) {
      if (startX < e.center.x) {
        arkanoid.moveBaffle('right')
      } else if (startX > e.center.x) {
        arkanoid.moveBaffle('left')
      }
      startTime = nowTime
    }
    startX = e.center.x
  })

  hammer.on('panend', (e) => {
    e.target.classList.remove('active')
    e.target.style.transform = 'translateX(0)'
  })
}

window.addEventListener('DOMContentLoaded', init)
