<template>
  <div
    ref="ctrlRef"
    class="game-controller"
    style="font-family: PieceFont;"
  >
  </div>
</template>

<script setup lang="ts">
import { ChessPiece } from '@/libs/ChessPiece'
import { createGameInterface } from '@/libs/GameInterface'
import { Point } from '@/libs/Point'
import { GameContext, User } from '@/types'
import { ComputedRef } from 'vue'
import cloneDeep from 'lodash.clonedeep'
import { getMoveList, getPieceByPoint, isCheckMate, isMovable, isSameCoord, mockMove, movePiece, switchCamp } from '@/utils'
import { Camp, GameStatus } from '@/definitions'

const emits = defineEmits<(e: 'game:change', context: GameContext) => void>()

const ctrlRef = ref<HTMLElement | null>()
const gameInterface = createGameInterface()

const context = inject<ComputedRef<GameContext | null>>('context')!
const currentUser = inject('currentUser', ref<User | null>(null))
const currentUserCamp = inject<ComputedRef<Camp | null>>('currentUserCamp')!

// 复制一份数据本地管理
const localContext = ref<GameContext | null>(null)

// const localContext = ref<GameContext>({
//   status: GameStatus.Playing,
//   players: null,
//   firstCamp: Camp.RED,
//   currentCamp: Camp.RED,
//   manual: [],
//   chessPieces: initChessPieces(),

//   /** 动画计时器 */
//   counter: 0,
//   /** 收集移动路径，生成棋谱 */
//   movePath: [],
//   /** 当前活跃棋子，当前阵营用户选中的已方棋子 */
//   activePiece: null,
//   /** 当前活跃棋子的可移动坐标 */
//   allowPoints: []
// })

watch(context, () => {
  localContext.value = context.value ? cloneDeep(toRaw(context.value)) : context.value

  draw()
}, { immediate: true })

onMounted(async () => {
  if (ctrlRef.value) {
    await initGame(ctrlRef.value)

    draw()
  }
})

onUnmounted(() => {
  if (ctrlRef.value) {
    gameInterface.destroy(ctrlRef.value)
  }
  // pause()
})

const setActive = (piece: ChessPiece | null): void => {
  if (!localContext.value) {
    throw new Error('Something went wrong.')
  }

  if (!piece) {
    localContext.value.activePiece = null
    localContext.value.allowPoints = []
    return
  }

  localContext.value.activePiece = piece
  localContext.value.allowPoints = getMoveList(piece, localContext.value.chessPieces)
}

const execMove = (point: Point, piece?: ChessPiece): void => {
  if (!localContext.value) {
    throw new Error('Something went wrong.')
  }

  if (!localContext.value.activePiece) {
    return
  }
  // 如果位置可移动，则移动到空位置
  if (isMovable(point, localContext.value.allowPoints)) {
    const res = mockMove(localContext.value.activePiece, point, localContext.value.chessPieces)

    switch (res) {
      case 'allow':
      case 'check':
        if (piece) {
          killPiece(piece)
        }
        movePiece(localContext.value.activePiece, point, localContext.value.chessPieces)
        // 将军
        if (res === 'check') {
          localContext.value.animations.push({
            type: 'Check',
            camp: localContext.value.currentCamp
          })
        }

        // GG
        if (isCheckMate(localContext.value.currentCamp, localContext.value.chessPieces)) {
          localContext.value.animations.push({
            type: 'CheckMate',
            camp: localContext.value.currentCamp
          }, {
            type: 'Win',
            camp: localContext.value.currentCamp
          })

          // 游戏结束
          localContext.value.status = GameStatus.Finished
        } else {
          // 移除当前活跃棋子
          setActive(null)
          // 轮到另一阵营
          localContext.value.currentCamp = switchCamp(localContext.value.currentCamp)
        }
        break
      case 'not-allow':
        setActive(null)
        break
      default:
        break
    }
  } else {
    setActive(null)
  }
}

const killPiece = ({ coord }: ChessPiece): void => {
  if (!localContext.value) {
    throw new Error('Something went wrong.')
  }

  localContext.value.chessPieces = localContext.value.chessPieces.filter(piece => {
    return !(piece.coord.x === coord.x && piece.coord.y === coord.y)
  })
}

const initGame = async (el: HTMLElement): Promise<void> => {
  await gameInterface.mount(el)

  gameInterface.mainCanvas.addEventListener('click', handleClick)
}

const handleClick = (e: MouseEvent): void => {
  const point = gameInterface.getPointer(e)

  const currentPiece = getPieceByPoint(point, localContext.value?.chessPieces)

  if (
    !localContext.value ||
    localContext.value.status !== GameStatus.Playing ||
    !currentUser.value ||
    // 非当前玩家无法操作棋盘内容
    currentUserCamp.value !== localContext.value.currentCamp
  ) {
    return
  }

  if (currentPiece) {
    if (!localContext.value.activePiece) {
      // 指定当前棋子
      setActive(
        localContext.value.currentCamp === currentPiece.camp
          ? currentPiece
          : null
      )
    } else if (isSameCoord(localContext.value.activePiece.coord, currentPiece.coord)) {
      setActive(null)
    } else {
      execMove(point, currentPiece)
    }
  } else {
    if (localContext.value.activePiece) {
      execMove(point)
    } else {
      // 移除当前活跃棋子
      setActive(null)
    }
  }

  emits('game:change', localContext.value)
}

function draw (): void {
  if (!localContext.value) {
    throw new Error('Something went wrong.')
  }

  console.log('rotate', currentUserCamp.value === Camp.BLACK ? Math.PI : 0)

  gameInterface.clearMain()
  gameInterface.setRotate(currentUserCamp.value === Camp.BLACK ? Math.PI : 0)

  gameInterface.drawChessPieces(localContext.value.chessPieces)

  if (localContext.value?.allowPoints?.length > 0 && currentUserCamp.value === localContext.value.currentCamp) {
    gameInterface.drawAllowPoints(localContext.value.allowPoints)
  }

  const lastPath = localContext.value.movePath.at(-1)

  if (lastPath) {
    gameInterface.drawCurrentStop(lastPath.path.at(-1)!, localContext.value.counter)
    gameInterface.drawLastStop(lastPath.path[0])
    gameInterface.drawMovePath(lastPath.path)
  }
}
</script>

<style lang="scss" scoped>
.game-controller {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
