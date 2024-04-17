import { GameConfig } from '../config'
import { MemberConfig } from '../config/members.config'

export const createGameList = (games: GameConfig[], members: MemberConfig[], rootPath = '/'): DocumentFragment => {
  const fragment = new DocumentFragment()

  const ProjectTitle = Object.assign(document.createElement('div'), {
    className: 'title',
    innerHTML: '<h1>Our <small style="opacity: .6;">Mini</small> Games</h1>'
  })

  const GameList = Object.assign(document.createElement('ul'), {
    className: 'games'
  })

  games.forEach(game => {
    const oLi = Object.assign(document.createElement('li'), {
      className: 'game-item',
      innerHTML: `<a href="${game.path}" title="${game.name}" target="_blank">
        ${game.cover ? `<img class="game-cover" src="${rootPath}${game.cover}" />` : ''}
        <span>${game.name}</span>
      </a>`
    })

    GameList.appendChild(oLi)
  })

  const AuthorTitle = Object.assign(document.createElement('h3'), {
    className: 'author-title',
    innerHTML: '游戏供应商<span class="join-btn"><a href="https://github.com/our-mini-games/mini-games">快来加盟吧</a></span>'
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
