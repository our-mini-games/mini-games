// @ts-expect-error
import ImgPreload from '@stan_bk/img-preload'

interface ImgPreloadWithMock extends ImgPreload {
  mockRender: (per: number) => void
  reload: () => void
}

const ipl: ImgPreloadWithMock = Object.assign(new ImgPreload(), {
  mockRender: (per: number) => {
    // @ts-expect-error
    ipl.shade.reload()
    // @ts-expect-error
    ipl.show()
    // @ts-expect-error
    ipl.shade.render(per)
  }
})

export default (): ImgPreloadWithMock => ipl
