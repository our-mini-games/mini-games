/* eslint-disable import/no-absolute-path */
export const loadResources = async () => {
  const data = await Promise.all([
    import('/resources/FZLSFT.ttf'),
    import('/resources/STXINGKAI.ttf'),
    import('/resources/sword.png'),
    import('/resources/win.png'),
    import('/resources/pattern.png')
  ])

  const result: any = {}
  let type
  let name
  let resource

  for (let i = 0; i < data.length; i++) {
    resource = data[i] as any

    ;[name, type] = resource.default.split('/').at(-1).split('.')

    if (type === 'png') {
      result[name] = await loadPic(resource.default)
    } else if (type === 'ttf') {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const font = new FontFace(name, `url(${resource.default})`)
      result[name] = await font.load()
      ;(document.fonts as any).add(font)
      await document.fonts.ready.then()
    }
  }

  return result
}
// eslint-disable-next-line @typescript-eslint/promise-function-async
const loadPic = (pic: string): Promise<HTMLImageElement> => {
  return new Promise(resolve => {
    const oImage = new Image()
    oImage.onload = () => {
      resolve(oImage)
    }
    oImage.src = pic
  })
}
