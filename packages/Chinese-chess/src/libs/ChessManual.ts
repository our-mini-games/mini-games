import { Camp } from "../definitions"
import { ChessPiece } from './ChessPiece'

export const changeXCoordMove = (currentCamp: Camp, piece: ChessPiece, x: number, y: number, chessPieces: ChessPiece[]): string => {
    // 这个方法是用来列举那些只改变X轴坐标走棋的棋谱
    // 士 象 马三种
    // 只有马特殊判断 因为如果在一路上有前马和后马的话就要判断是那个马进行了移动 
    let text: string = piece.name
    if (piece.name === "馬") {
        let hasTowHorse: Array<ChessPiece> = chessPieces.filter(item => item.coord.x === piece.coord.x && item.coord.y !== piece.coord.y && item.camp === currentCamp && item.name === "馬")
        if (hasTowHorse.length === 1) {
            // 判断是前马还是后马 
            if (currentCamp === Camp.RED) {
                text = hasTowHorse[0].coord.y > piece.coord.y ? "前馬" : "后馬"
            } else {
                text = hasTowHorse[0].coord.y > piece.coord.y ? "后馬" : "前馬"
            }
        }
    }
    if (currentCamp === Camp.RED) {
        text += y > piece.coord.y ? `${10 - piece.coord.x}退${10 - x}` : `${10 - piece.coord.x}进${10 - x}`
    } else {
        text += y < piece.coord.y ? `${piece.coord.x}退${x}` : `${piece.coord.x}进${x}`
    }
    // 正常走子
    return text
}

export const changeOtherCoordMove = (currentCamp: Camp, piece: ChessPiece, x: number, y: number): string => {
    let text: string = ""
    let direction = "进"
    let count: number = y - piece.coord.y
    if (count > 0) {
        // 红方的话就是y差为正数就是退 负数就是进
        direction = currentCamp === Camp.RED ? "退" : "进"
        text = `${piece.name}${currentCamp === Camp.RED ? 10 - piece.coord.x : piece.coord.x}${direction}${Math.abs(count)}`
    } else if (count < 0) {
        // 黑方的话y差为正数就是进 负数就是退
        direction = currentCamp === Camp.RED ? "进" : "退"
        text = `${piece.name}${currentCamp === Camp.RED ? 10 - piece.coord.x : piece.coord.x}${direction}${Math.abs(count)}`
    } else {
        // 否则的话就是平
        direction = "平"
        text = `${piece.name}${currentCamp === Camp.RED ? 10 - piece.coord.x : piece.coord.x}${direction}${currentCamp === Camp.RED ? 10 - x : x}`
    }
    return text
}

