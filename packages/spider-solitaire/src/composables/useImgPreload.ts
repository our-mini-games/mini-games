import ImgPreload from '@stan_bk/img-preload'

interface ImgPreloadWithMock extends ImgPreload {
  mockRender: (per: number) => void
}
const ipl: ImgPreloadWithMock = Object.assign(new ImgPreload(), {
  mockRender: (per: number) => {
    ipl.shade.reload()
    ipl.show()
    ipl.shade.render(per)
  }
})

export default (): ImgPreloadWithMock => ipl
