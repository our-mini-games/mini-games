import { games } from './config'
import { createGameList } from './lib/utils'
import './style.css'

const app = document.querySelector('#app')!

const oGames = createGameList(games)

app.appendChild(oGames)

console.log(1)
