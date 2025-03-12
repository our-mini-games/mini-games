import './style.css'

import { createGameList } from './lib/utils.js'
import { games, members } from './config/index.js'

const app = document.querySelector('#app')!

const oGames = createGameList(games, members, import.meta.env.VITE_APP_PATHNAME)

app.appendChild(oGames)
