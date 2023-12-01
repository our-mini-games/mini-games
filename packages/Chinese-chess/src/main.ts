import { createController } from './libs/Controller'

import './assets/style.scss'

const oApp = document.querySelector('#app')!

const oMain = oApp.querySelector('#main')
const oManual = oApp.querySelector('#manual')
const oChatList = oApp.querySelector('#chat-list')
const oChatInput = oApp.querySelector<HTMLInputElement>('#chat-input')

if (oMain && oManual && oChatList && oChatInput) {
  const ctrl = createController({
    oMain,
    oManual,
    oChatList,
    oChatInput
  })

  ctrl.initGame(oApp)

  // ctrl.run()
}
