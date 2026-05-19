// @ts-expect-error
import ImgPreload from '@stan_bk/img-preload'

const ipl = Object.assign(new ImgPreload(), {
  mockRender: (per: number) => {
    ipl.shade.reload()
    ipl.show()
    ipl.shade.render(per)
  }
})

export default (): typeof ipl => ipl
