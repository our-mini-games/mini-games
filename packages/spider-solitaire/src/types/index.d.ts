import { SolitaireNumber, SolitaireSuits } from '../config'

export interface SolitaireGroupItem {
  suit: SolitaireSuits
  number: SolitaireNumber
  isOpen: boolean
}
