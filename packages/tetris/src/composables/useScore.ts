import { ref, Ref, watch } from 'vue'
import { GameMode, GameStatus, scoreConfig } from '../config/index.js'
import { TETRIS_HIGH_SCORE } from '../config/constants.js'

let defaultHighScore = 0

try {
  defaultHighScore = JSON.parse(localStorage.getItem(TETRIS_HIGH_SCORE) ?? '0')
} catch {}

export default (gameStatus: Ref<GameStatus>, gameMode: Ref<GameMode>): {
  score: Ref<number>
  highScore: Ref<number>
  setScore: (rows?: number) => void
} => {
  const score = ref(0)
  const highScore = ref(defaultHighScore)

  const setScore = (rows?: number): void => {
    if (!rows) {
      score.value = 0
      return
    }

    score.value += scoreConfig[rows as keyof typeof scoreConfig] || 0
  }

  watch(gameStatus, (newStatus, _oldStatus) => {
    // 标准模式才保存最高分
    if (newStatus === GameStatus.Finished && gameMode.value === GameMode.Normal) {
      if (highScore.value < score.value) {
        highScore.value = score.value
        try {
          localStorage.setItem(TETRIS_HIGH_SCORE, `${score.value}`)
        } catch {}
      }
    }
  }, {
    immediate: true
  })

  return {
    score,
    highScore,
    setScore
  }
}
