import { createController } from './libs/Controller'

const oMain = document.querySelector('#main')!

const ctrl = createController()

ctrl.initGame(oMain)

ctrl.run()
