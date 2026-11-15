import { GameConfig } from '../config/index.js'
import { MemberConfig } from '../config/members.config.js'

export const createGameList = (games: GameConfig[], members: MemberConfig[], rootPath = '/'): DocumentFragment => {
  const fragment = new DocumentFragment()

  const ProjectTitle = Object.assign(document.createElement('div'), {
    className: 'hero',
    innerHTML: '<h1 class="arcade-title">小游戏合集</h1>'
  })

  const GameList = Object.assign(document.createElement('ul'), {
    className: 'games'
  })

  games.forEach(game => {
    const oLi = Object.assign(document.createElement('li'), {
      className: 'game-item',
      innerHTML: `<a href="${game.path}" target="_blank" rel="noopener">
        ${game.cover ? `<img class="game-cover" src="${rootPath}${game.cover}" alt="" />` : ''}
        <span>${game.name}</span><span class="game-arrow" aria-hidden="true">↗</span>
      </a>`
    })

    GameList.appendChild(oLi)
  })

  const AuthorTitle = Object.assign(document.createElement('h2'), {
    className: 'author-title',
    innerHTML: '开发者 <a class="join-btn" href="https://github.com/our-mini-games/mini-games">参与项目 ↗</a>'
  })

  const MemberList = Object.assign(document.createElement('ul'), {
    className: 'members'
  })

  members.forEach(member => {
    const oLi = Object.assign(document.createElement('li'), {
      className: 'member-item',
      innerHTML: `<a href="${member.homepage}" target="_blank" title="${member.name}"><img src=${member.avatar} alt=${member.name} /></a>`
    })

    MemberList.appendChild(oLi)
  })

  fragment.appendChild(ProjectTitle)
  fragment.appendChild(GameList)
  fragment.appendChild(AuthorTitle)
  fragment.appendChild(MemberList)

  return fragment
}
