import '../styles/pointerTip.css'

interface PointerTip {
  addPointerTip: (tar: HTMLElement, isMajor: boolean) => void
  removePointerTip: (tar: HTMLElement) => void
}

export enum PointerTipDir {
  up = 'pointer-tip-up',
  down = 'pointer-tip-down',
  left = 'pointer-tip-left',
  right = 'pointer-tip-right'
}

// Map k/v of direction and its corresponding class name
// key is the bitwise value of the direction from Hammer.js
export const pointerTipMap: Record<number, PointerTipDir> = {
  8: PointerTipDir.up,
  2: PointerTipDir.left,
  16: PointerTipDir.down,
  4: PointerTipDir.right
}

export const allPointerTipDirs = [PointerTipDir.up, PointerTipDir.down, PointerTipDir.left, PointerTipDir.right]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let pointerTipTarget: HTMLElement | null = null

const addPointerTip = (tar: HTMLElement, isMajor: boolean): void => {
  pointerTipTarget = tar
  tar.classList.add('pointer-tip')
  if (isMajor) {
    tar.classList.add('pointer-tip-major')
  }
}

const removePointerTip = (tar: HTMLElement): void => {
  tar.classList.remove('pointer-tip')
}

export const usePointerTip = (): PointerTip => ({
  addPointerTip,
  removePointerTip
})
