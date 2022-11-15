import './style.css'

import { createGameList } from './lib/utils'
import { games } from './config'

const app = document.querySelector('#app')!

const oGames = createGameList(games)

app.appendChild(oGames)
