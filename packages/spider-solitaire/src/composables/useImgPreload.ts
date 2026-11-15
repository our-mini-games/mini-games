import ImgPreload from '@stan_bk/img-preload'

const ipl = Object.assign(new ImgPreload({
  customShade: (percent: number, { shade }: { shade: HTMLElement }) => {
    shade.classList.add('arcade-loading')
    shade.setAttribute('role', 'status')
    shade.textContent = '正在发牌…'
    if (percent === 100) shade.style.display = 'none'
  }
}), {
  mockRender: (percent: number) => {
    ipl.shade.reload()
    ipl.show()
    ipl.shade.render(percent)
  }
})

export default (): typeof ipl => ipl
