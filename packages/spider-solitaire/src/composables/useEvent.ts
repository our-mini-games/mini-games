import { Ref } from 'vue'
import { canSolitairesMove } from '../lib/validator'
import { SolitaireGroupItem } from '../types'

export interface UseEventReturnType {
  isDraging: Ref<boolean>
  handleMousedown: (e: MouseEvent, solitaires: SolitaireGroupItem[], index: number) => void
}

export default (
  svgRef: Ref<SVGAElement | undefined>
): UseEventReturnType => {
  const startPosition = {
    left: 0,
    top: 0
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let targetSolitaire: SolitaireGroupItem | null = null
  let targets: SVGAElement[] = []

  const isDraging = ref(false)

  const handleMousedown = (e: MouseEvent, solitaires: SolitaireGroupItem[], index: number): void => {
    console.log(e, solitaires, index, canSolitairesMove(solitaires, index))
    if (canSolitairesMove(solitaires, index)) {
      startPosition.left = e.clientX
      startPosition.top = e.clientY

      const target = e.target as Element
      targets = Array.prototype.slice.call(target.parentElement!.children, index) as SVGAElement[]
      targetSolitaire = solitaires[index]

      isDraging.value = true

      window.addEventListener('mousemove', handleMousemove, false)
      window.addEventListener('mouseup', handleMouseup, false)
    }
  }

  const handleMousemove = (e: MouseEvent): void => {
    if (!svgRef.value) {
      return
    }

    const {
      clientX,
      clientY
    } = e

    const { left, top } = svgRef.value.getBoundingClientRect()

    console.log('left', clientX, left)
    console.log('top', clientY, top)

    targets.forEach(target => {
      target.style.transform = `translate(${clientX - startPosition.left}px, ${clientY - startPosition.top}px)`
    })
  }

  const handleMouseup = (e: MouseEvent): void => {
    // 获取鼠标最后所在位置是否在牌组区域（每组牌最后一张的位置）
    // const {
    //   clientX,
    //   clientY
    // } = e

    window.removeEventListener('mousemove', handleMousemove, false)
    window.removeEventListener('mouseup', handleMouseup, false)
  }

  return {
    isDraging,
    handleMousedown
  }
}
