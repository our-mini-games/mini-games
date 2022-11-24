import { Ref } from 'vue'
import { GameStatus, scoreConfig } from '../config'
import { TETRIS_HIGH_SCORE } from '../config/constatns'

let defaultHighScore = 0

try {
  defaultHighScore = JSON.parse(localStorage.getItem(TETRIS_HIGH_SCORE) ?? '0')
} catch {}

export default (gameStatus: Ref<GameStatus>): {
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
    if (newStatus === GameStatus.Finished) {
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
