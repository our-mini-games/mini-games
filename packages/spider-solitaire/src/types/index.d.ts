import { SolitaireNumber, SolitaireSuits } from '../config/index.js'

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

export interface SolitaireSize {
  width: number
  height: number
  radius: number
  font: {
    textLength: number
    size: number
  }
  fontMargin: {
    top: number
    left: number
    right: number
    bottom: number
  }
  padding: {
    left: number
    top: number
  }
  patternArea: {
    width: number
    height: number
    center: {
      x: number
      y: number
    }
  }
  patternSize: {
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
  }
  patternGaps: {
    md2x: number
    md4y: number
    lg2x: number
    lg3y: number
  }
}

export interface WindowSize {
  width: number
  height: number
  scale: number
  isRotate: boolean
  solitaireSize: SolitaireSize
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
