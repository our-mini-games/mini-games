<template>
  <div
    ref="ctrlRef"
    class="game-controller"
  >
  </div>
</template>

<script setup lang="ts">
import { ChessPiece } from '@/libs/ChessPiece'
import { createGameInterface } from '@/libs/GameInterface'
import { Point } from '@/libs/Point'
import { GameContext } from '@/types'
import { ComputedRef } from 'vue'

const ctrlRef = ref<HTMLElement | null>()
const gameInterface = createGameInterface()

const context = inject<ComputedRef<GameContext | null>>('context')!

onMounted(() => {
  if (ctrlRef.value) {
    initGame(ctrlRef.value)
    run()
  }
})

onUnmounted(() => {
  pause()
})

const getPieceByPoint = (point: Point): ChessPiece | undefined => {
  return (context.value?.chessPieces || []).find(({ coord }) => coord.x === point.x && coord.y === point.y)
}

const setActive = (piece?: ChessPiece): void => {
  // if (context.value?.activePiece) {
  //   context.value.activePiece.setScale(1)
  // }

  // if (!piece) {
  //   context.value!.activePiece = null
  //   return
  // }
  // if (piece.camp === context.value?.currentCamp) {
  //   context.value!.activePiece = piece
  // } else {
  //   context.value!.activePiece = null
  // }
}

const initGame = (el: HTMLElement) => {
  gameInterface.mount(el)

  gameInterface.mainCanvas.addEventListener('click', handleClick)
}

const handleClick = (e: MouseEvent): void => {
  const point = gameInterface.getPointer(e)

  if (context.value?.activePiece) {
    // @todo 移动己方棋子
    console.log(1)
    // setActive()
  } else {
    // 选中已方棋子
    const piece = getPieceByPoint(point)

    // setActive(piece)
  }
}

let reqId: number
let lastTime = Date.now()

function run (): void {
  reqId = requestAnimationFrame(run)
  if (!context.value) {
    return
  }
  context.value.counter += Math.PI / 180

  if (context.value.counter >= 2 * Math.PI) {
    context.value.counter = 0
  }

  const currTime = Date.now()
  if (currTime - lastTime > 500 && context.value.activePiece) {
    context.value.activePiece.setScale(context.value.activePiece.scale === 1
      ? 0.9
      : 1
    )
    lastTime = currTime

    console.log(context.value.activePiece.scale)
  }

  gameInterface.clearMain()

  gameInterface.drawChessPieces(context.value.chessPieces)
  const lastPath = context.value.movePath.at(-1)

  if (lastPath) {
    gameInterface.drawCurrentStop(lastPath.path.at(-1)!, context.value.counter)
    gameInterface.drawLastStop(lastPath.path[0])
    gameInterface.drawMovePath(lastPath.path)
  }
}

function pause (): void {
  cancelAnimationFrame(reqId)
}
</script>

<style lang="scss" scoped>
.game-controller {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
