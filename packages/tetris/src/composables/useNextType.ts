import { Ref } from 'vue'
import { GameStatus } from '../config'
import { getTetrisNextType } from '../lib/nextType'
import { Tetris } from '../types'

export default (
  currentTetris: Ref<Tetris | undefined>,
  gameStatus: Ref<GameStatus>
): () => void => {
  const startTime = Date.now()

  return () => {
    if (!currentTetris.value || gameStatus.value !== GameStatus.Playing) {
      return
    }

    const currentTime = Date.now()

    if (currentTime - startTime > 50) {
      // @todo 需要判断是否可以转换，比如触底、旁边已存在方块阻碍
      currentTetris.value = getTetrisNextType(currentTetris.value)
    }
  }
}
