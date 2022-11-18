import { GameConfig } from '../config'

export const createGameList = (games: GameConfig[]): HTMLUListElement => {
  const oUl = Object.assign(document.createElement('ul'), {
    className: 'games'
  })

  games.forEach(game => {
    const oLi = Object.assign(document.createElement('li'), {
      className: 'game-item',
      innerHTML: `<a href="${game.path}" title="${game.name}">
        ${game.cover ? `<img class="game-cover" :src="${game.cover}" />` : ''}
        <span>${game.name}</span>
      </a>`
    })

    oUl.appendChild(oLi)
  })

  return oUl
}
