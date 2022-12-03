import './style.css'

import { createGameList } from './lib/utils'
import { games } from './config'

const app = document.querySelector('#app')!

const oGames = createGameList(games, import.meta.env.VITE_APP_PATHNAME)

app.appendChild(oGames)
