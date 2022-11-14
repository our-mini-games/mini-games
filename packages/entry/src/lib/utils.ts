import { GameConfig } from '../config'

export const createGameList = (games: GameConfig[]) => {
  const oUl = document.createElement('ul')
  oUl.className = 'games'

  games.forEach(game => {
    const oLi = document.createElement('li')
    oLi.className = 'game-item'
    oLi.innerHTML = `
      <a href="${game.path}" title="${game.name}">
        ${game.name}
      </a>
    `
    oLi.setAttribute('data-path', game.path)

    oUl.appendChild(oLi)
  })

  return oUl
}
