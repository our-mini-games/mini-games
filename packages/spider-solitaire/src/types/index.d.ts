import { SolitaireNumber, SolitaireSuits } from '../config'

export interface SolitaireGroupItem {
  suit: SolitaireSuits
  number: SolitaireNumber
  isOpen: boolean
}

export interface Size {
  width: number
  height: number
  gap: number
}

export interface WindowSize {
  width: number
  height: number
  scale: number
  isRotate: boolean
  unopenedGroupGap: number
  openedGroupGap: number
  padding: {
    left: number
    top: number
  }
  viewBoxWidth: number
  viewBoxHeight: number
  activeAreaSize: Size
  inactiveAreaSize: Size
  receiveAreaSize: Size
  controlAreaSize: Omit<Size, 'gap'>
}
