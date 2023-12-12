import { ChessPiece } from './ChessPiece'
import { Camp } from '../definitions'
import { Point } from './Point'
interface HorseRule {
    horseLegcoord: [number, number],
    notMovecoord: Array<[number, number]>,
    hasPiece: boolean
}

interface ElephantRule {
    elephantLegcoord: [number, number],
    notMovecoord: Array<[number, number]>,
    hasPiece: boolean,
}

interface RegularXCoordMap {
    coord: Array<[number, number]>,
    xCoord: number
}

class Piece {
    x: number
    y: number
    camp: Camp
    currentExecution: Camp
    pieces: Array<ChessPiece>
    friendlyPieceList: Array<ChessPiece>
    enemyPieceList: Array<ChessPiece>
    constructor(coord: Point, pieces: Array<ChessPiece>, camp: Camp, currentExecution: Camp) {
        let { x, y } = coord
        this.x = x
        this.y = y
        this.pieces = pieces
        this.camp = camp
        this.currentExecution = currentExecution
        this.friendlyPieceList = pieces.filter(item => item.camp === currentExecution)
        this.enemyPieceList = pieces.filter(item => item.camp !== currentExecution)
    }
}
// 兵
class Soldier extends Piece {
    constructor(coord: Point, pieces: Array<ChessPiece>, camp: Camp, currentExecution: Camp) {
        super(coord, pieces, camp, currentExecution)
    }
    allCanMove(): Array<[number, number]> {
        // 所有可以移动的空位和可以吃的位置
        return [...this.computedCanMove(), ...this.computedCanEat()]
    }
    allMoveCoord(): Array<[number, number]> {
        // 可以吃也可以移动的空位 不去计算落点有没有棋子
        return this.camp === Camp.RED ? this.redSoldierMove() : this.blackSoldierMove()
    }
    computedCanMove(): Array<[number, number]> {
        // 计算只能移动的空位
        return this.allMoveCoord().filter(item => {
            return !this.pieces.find(e => item[0] === e.coord.x && item[1] === e.coord.y)
        })
    }
    redSoldierMove(): Array<[number, number]> {
        // 兵
        // 判断是否过河 没有过河的话就只有一个点位
        let isCrossRiver: boolean = this.y < 6
        if (isCrossRiver) {
            return this.soldierMove([[this.x + 1, this.y], [this.x - 1, this.y], [this.x, this.y - 1]])
        }
        return [[this.x, this.y - 1]]
    }
    blackSoldierMove(): Array<[number, number]> {
        // 卒
        // 判断是否过河 没有过河的话就只有一个点位
        let isCrossRiver: boolean = this.y > 5
        if (isCrossRiver) {
            return this.soldierMove([[this.x + 1, this.y], [this.x - 1, this.y], [this.x, this.y + 1]])
        }
        return [[this.x, this.y + 1]]
    }
    soldierMove(coordList: Array<[number, number]>) {
        return coordList.filter(item => item[0] > 0 && item[0] < 10 && item[1] > 0 && item[1] < 11)
    }
    computedCanEat(): Array<[number, number]> {
        // 判断这些点位上那些是有敌方棋子的就是可以吃的
        return this.allMoveCoord().filter(item => {
            return this.enemyPieceList.find(e => e.coord.x === item[0] && e.coord.y === item[1])
        })
    }
}

// 炮
class BigGun extends Piece {
    constructor(coord: Point, pieces: Array<ChessPiece>, camp: Camp, currentExecution: Camp) {
        super(coord, pieces, camp, currentExecution)
    }
    allCanMove(): Array<[number, number]> {
        // 所有可以移动的空位和可以吃的位置
        return [...this.computedCanMove(), ...this.computedCanEat()]
    }
    computedCanMove(): Array<[number, number]> {
        // 炮可以移动的只有直线
        // 先列举出可以移动的地方
        // x轴
        let canMoveX: Array<[number, number]> = this.computedMoveX()
        // y轴
        let canMoveY: Array<[number, number]> = this.computedMoveY()
        return [...canMoveX, ...canMoveY]
    }
    computedMoveX(): Array<[number, number]> {
        let Xcoord: Array<[number, number]> = []
        for (let x = this.x - 1; x > 0; x--) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === x && item.coord.y === this.y)
            if (hasPiece) {
                break;
            }
            Xcoord.push([x, this.y])
        }

        for (let x = this.x + 1; x < 10; x++) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === x && item.coord.y === this.y)
            if (hasPiece) {
                break;
            }
            Xcoord.push([x, this.y])
        }
        return Xcoord
    }
    computedMoveY(): Array<[number, number]> {
        let Ycoord: Array<[number, number]> = []
        for (let y = this.y - 1; y > 0; y--) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === this.x && item.coord.y === y)
            if (hasPiece) {
                break;
            }
            Ycoord.push([this.x, y])
        }

        for (let y = this.y + 1; y < 11; y++) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === this.x && item.coord.y === y)
            if (hasPiece) {
                break;
            }
            Ycoord.push([this.x, y])
        }
        return Ycoord
    }
    computedCanEat(): Array<[number, number]> {
        return [...this.computedCanEatX(), ...this.computedCanEatY()]
    }
    computedCanEatX(): Array<[number, number]> {
        // 先找炮架
        let carriage: Array<number> = []
        let Xcoord: Array<[number, number]> = []
        // 向左边找炮架子
        for (let x = this.x - 1; x > 0; x--) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === x && item.coord.y === this.y)
            if (hasPiece) {
                carriage = [hasPiece.coord.x, hasPiece.coord.y]
                break;
            }
        }
        // 如果有炮架子那么就去循环能不能发炮
        if (carriage.length > 0) {
            for (let x = carriage[0] - 1; x > 0; x--) {
                // 是否有棋子 如果有棋子 那么如果是友方棋子就结束 如果是敌方棋子就可以发射
                let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === x && item.coord.y === this.y)
                if (hasPiece) {
                    let isEnemyPiece: boolean = hasPiece.camp !== this.currentExecution
                    if (isEnemyPiece) {
                        Xcoord.push([x, this.y])
                    }
                    break;
                }
            }
        }
        // 向左边找完之后清空炮架子
        carriage = []
        // 向右边找炮架子
        for (let x = this.x + 1; x < 10; x++) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === x && item.coord.y === this.y)
            if (hasPiece) {
                carriage = [hasPiece.coord.x, hasPiece.coord.y]
                break;
            }
        }
        if (carriage.length > 0) {
            for (let x = carriage[0] + 1; x < 10; x++) {
                // 是否有棋子 如果有棋子 那么如果是友方棋子就结束 如果是敌方棋子就可以发射
                let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === x && item.coord.y === this.y)
                if (hasPiece) {
                    let isEnemyPiece: boolean = hasPiece.camp !== this.currentExecution
                    if (isEnemyPiece) {
                        Xcoord.push([x, this.y])
                    }
                    break;
                }
            }
        }
        return Xcoord

    }
    computedCanEatY(): Array<[number, number]> {
        // 先找炮架
        let carriage: Array<number> = []
        let Ycoord: Array<[number, number]> = []
        // 向上边找炮架子
        for (let y = this.y - 1; y > 0; y--) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === this.x && item.coord.y === y)
            if (hasPiece) {
                carriage = [hasPiece.coord.x, hasPiece.coord.y]
                break;
            }
        }
        // 如果有炮架子那么就去循环能不能发炮
        if (carriage.length > 0) {
            for (let y = carriage[1] - 1; y > 0; y--) {
                // 是否有棋子 如果有棋子 那么如果是友方棋子就结束 如果是敌方棋子就可以发射
                let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === this.x && item.coord.y === y)
                if (hasPiece) {
                    let isEnemyPiece: boolean = hasPiece.camp !== this.currentExecution
                    if (isEnemyPiece) {
                        Ycoord.push([this.x, y])
                    }
                    break;
                }
            }
        }
        // 向左边找完之后清空炮架子
        carriage = []
        // 向右边找炮架子
        for (let y = this.y + 1; y < 11; y++) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === this.x && item.coord.y === y)
            if (hasPiece) {
                carriage = [hasPiece.coord.x, hasPiece.coord.y]
                break;
            }
        }
        if (carriage.length > 0) {
            for (let y = carriage[1] + 1; y < 11; y++) {
                // 是否有棋子 如果有棋子 那么如果是友方棋子就结束 如果是敌方棋子就可以发射
                let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === this.x && item.coord.y === y)
                if (hasPiece) {
                    let isEnemyPiece: boolean = hasPiece.camp !== this.currentExecution
                    if (isEnemyPiece) {
                        Ycoord.push([this.x, y])
                    }
                    break;
                }
            }
        }
        return Ycoord
    }
}

// 马
class Horse extends Piece {
    constructor(coord: Point, pieces: Array<ChessPiece>, camp: Camp, currentExecution: Camp) {
        super(coord, pieces, camp, currentExecution)
    }
    allCanMove(): Array<[number, number]> {
        // 所有可以移动的空位和可以吃的位置
        return [...this.computedCanMove(), ...this.computedCanEat()]
    }
    allMoveCoord(): Array<[number, number]> {
        // 马只能前进或者后退1个方位或者两个方位
        // 例如马3进5或者马3进4 或者马3退5或者马3退4
        // 马主要计算别马腿 马别腿的棋子只会出现在四个方位
        let x: number = this.x
        let y: number = this.y
        // 去除掉所有不能移动的地方 剩下的就是可以移动的地方了
        let horseRuleList: Array<HorseRule> = [{
            horseLegcoord: [x, y + 1],
            notMovecoord: [[x + 1, y + 2], [x - 1, y + 2]],
            hasPiece: false
        }, {
            horseLegcoord: [x, y - 1],
            notMovecoord: [[x + 1, y - 2], [x - 1, y - 2]],
            hasPiece: false
        }, {
            horseLegcoord: [x - 1, y],
            notMovecoord: [[x - 2, y + 1], [x - 2, y - 1]],
            hasPiece: false
        }, {
            horseLegcoord: [x + 1, y],
            notMovecoord: [[x + 2, y + 1], [x + 2, y - 1]],
            hasPiece: false
        }]
        return horseRuleList.map(item => {
            return {
                ...item,
                // 过滤超出棋盘的坐标
                notMovecoord: this.filterOutOfRange(item.notMovecoord)
            }
        }).map(item => {
            return {
                ...item,
                // 判断马腿上有没有棋子
                hasPiece: this.hasPiece(item.horseLegcoord),
            }
        }).reduce((pre: Array<[number, number]>, item) => {
            if (!item.hasPiece) {
                pre.push(...item.notMovecoord)
            }
            return pre
        }, [])
    }
    computedCanMove(): Array<[number, number]> {
        return this.allMoveCoord().filter(item => {
            // 过滤落点没有棋子
            return !this.hasPiece(item)
        })
    }
    hasPiece(coordList: [number, number]): boolean {
        // 判断是否有棋子
        return Boolean(this.pieces.find(e => coordList[0] === e.coord.x && coordList[1] === e.coord.y))
    }
    filterOutOfRange(coordList: Array<[number, number]>): Array<[number, number]> {
        // 先过滤没有超出格子的坐标
        return coordList.filter(item => item[0] > 0 && item[0] < 10 && item[1] > 0 && item[1] < 11)
    }
    computedCanEat(): Array<[number, number]> {
        // 只要能落点 且落点的子是敌方棋子就是吃
        return this.allMoveCoord().filter(item => {
            return this.enemyPieceList.find(e => item[0] === e.coord.x && item[1] === e.coord.y)
        })
    }
}

// 车
class Vehicle extends Piece {
    constructor(coord: Point, pieces: Array<ChessPiece>, camp: Camp, currentExecution: Camp) {
        super(coord, pieces, camp, currentExecution)
    }
    allCanMove(): Array<[number, number]> {
        // 所有可以移动的空位和可以吃的位置
        return [...this.computedCanMove(), ...this.computedCanEat()]
    }
    computedCanMove(): Array<[number, number]> {
        // 车可以移动的只有直线
        // 先列举出可以移动的地方
        // x轴
        let canMoveX: Array<[number, number]> = this.computedMoveX()
        // y轴
        let canMoveY: Array<[number, number]> = this.computedMoveY()
        return [...canMoveX, ...canMoveY]
    }
    computedMoveX(): Array<[number, number]> {
        let Xcoord: Array<[number, number]> = []
        for (let x = this.x - 1; x > 0; x--) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === x && item.coord.y === this.y)
            if (hasPiece) {
                break;
            }
            Xcoord.push([x, this.y])
        }

        for (let x = this.x + 1; x < 10; x++) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === x && item.coord.y === this.y)
            if (hasPiece) {
                break;
            }
            Xcoord.push([x, this.y])
        }
        return Xcoord
    }
    computedMoveY(): Array<[number, number]> {
        let Ycoord: Array<[number, number]> = []
        for (let y = this.y - 1; y > 0; y--) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === this.x && item.coord.y === y)
            if (hasPiece) {
                break;
            }
            Ycoord.push([this.x, y])
        }

        for (let y = this.y + 1; y < 11; y++) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === this.x && item.coord.y === y)
            if (hasPiece) {
                break;
            }
            Ycoord.push([this.x, y])
        }
        return Ycoord
    }
    computedCanEat(): Array<[number, number]> {
        return [...this.computedCanEatX(), ...this.computedCanEatY()]
    }
    computedCanEatX(): Array<[number, number]> {
        let Xcoord: Array<[number, number]> = []
        for (let x = this.x - 1; x > 0; x--) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === x && item.coord.y === this.y)
            if (hasPiece) {
                // 判断一下是不是自己人
                let isEnemyPiece: boolean = hasPiece.camp !== this.currentExecution
                if (isEnemyPiece) {
                    Xcoord.push([x, this.y])
                }
                break;
            }

        }
        for (let x = this.x + 1; x < 10; x++) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === x && item.coord.y === this.y)
            if (hasPiece) {
                // 判断一下是不是自己人
                let isEnemyPiece: boolean = hasPiece.camp !== this.currentExecution
                if (isEnemyPiece) {
                    Xcoord.push([x, this.y])
                }
                break;
            }

        }
        return Xcoord

    }
    computedCanEatY(): Array<[number, number]> {
        let Ycoord: Array<[number, number]> = []
        for (let y = this.y - 1; y > 0; y--) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === this.x && item.coord.y === y)
            if (hasPiece) {
                // 判断一下是不是自己人
                let isEnemyPiece: boolean = hasPiece.camp !== this.currentExecution
                if (isEnemyPiece) {
                    Ycoord.push([this.x, y])
                }

                break;
            }

        }

        for (let y = this.y + 1; y < 11; y++) {
            let hasPiece: ChessPiece | undefined = this.pieces.find(item => item.coord.x === this.x && item.coord.y === y)
            if (hasPiece) {
                // 判断一下是不是自己人
                let isEnemyPiece: boolean = hasPiece.camp !== this.currentExecution
                if (isEnemyPiece) {
                    Ycoord.push([this.x, y])
                }
                break;
            }
        }
        return Ycoord
    }
}

// 象
class Elephant extends Piece {
    constructor(coord: Point, pieces: Array<ChessPiece>, camp: Camp, currentExecution: Camp) {
        super(coord, pieces, camp, currentExecution)
    }
    allCanMove(): Array<[number, number]> {
        // 所有可以移动的空位和可以吃的位置
        return [...this.computedCanMove(), ...this.computedCanEat()]
    }
    allMoveCoord(): Array<[number, number]> {
        // 象走田 只能前进两个方位或者后退两个方位
        // 这里要做红象和黑象的判断
        // 四个象腰
        let x = this.x
        let y = this.y
        let elephantRuleList: Array<ElephantRule> = [{
            elephantLegcoord: [x + 1, y + 1],
            notMovecoord: [[x + 2, y + 2]],
            hasPiece: false
        }, {
            elephantLegcoord: [x - 1, y + 1],
            notMovecoord: [[x - 2, y + 2]],
            hasPiece: false
        }, {
            elephantLegcoord: [x + 1, y - 1],
            notMovecoord: [[x + 2, y - 2]],
            hasPiece: false
        }, {
            elephantLegcoord: [x - 1, y - 1],
            notMovecoord: [[x - 2, y - 2]],
            hasPiece: false
        }]
        return elephantRuleList.map(item => {
            // 过滤掉超出棋盘且过河的坐标(象不能过河)
            return {
                ...item,
                // 过滤超出棋盘的坐标
                notMovecoord: this.camp === Camp.RED ? this.filterRedOutOfRange(item.notMovecoord) : this.filterBlackOutOfRange(item.notMovecoord)
            }
        }).map(item => {
            return {
                ...item,
                // 判断象腰上有没有棋子
                hasPiece: this.hasPiece(item.elephantLegcoord),
            }
        }).reduce((pre: Array<[number, number]>, item) => {
            if (!item.hasPiece) {
                pre.push(...item.notMovecoord)
            }
            return pre
        }, [])
    }
    computedCanMove(): Array<[number, number]> {
        return this.allMoveCoord().filter(item => {
            // 过滤落点有没有棋子
            return !this.hasPiece(item)
        })
    }
    hasPiece(coordList: [number, number]): boolean {
        // 判断是否有棋子
        return Boolean(this.pieces.find(e => coordList[0] === e.coord.x && coordList[1] === e.coord.y))
    }
    filterRedOutOfRange(coordList: Array<[number, number]>): Array<[number, number]> {
        return coordList.filter(item => item[0] > 0 && item[0] < 10 && item[1] > 5 && item[1] < 11)
    }
    filterBlackOutOfRange(coordList: Array<[number, number]>): Array<[number, number]> {
        return coordList.filter(item => item[0] > 0 && item[0] < 10 && item[1] > 0 && item[1] < 6)
    }
    computedCanEat(): Array<[number, number]> {
        // 只要能落点 且落点的子是敌方棋子就是吃
        return this.allMoveCoord().filter(item => {
            return this.enemyPieceList.find(e => item[0] === e.coord.x && item[1] === e.coord.y)
        })
    }
}

// 士
class Scholar extends Piece {
    constructor(coord: Point, pieces: Array<ChessPiece>, camp: Camp, currentExecution: Camp) {
        super(coord, pieces, camp, currentExecution)
    }
    allCanMove(): Array<[number, number]> {
        // 所有可以移动的空位和可以吃的位置
        return [...this.computedCanMove(), ...this.computedCanEat()]
    }
    allMoveCoord(): Array<[number, number]> {
        // 可以吃也可以移动的空位 不去计算落点有没有棋子
        return this.camp === Camp.RED ? this.redScholarMove() : this.blackScholarMove()
    }
    computedCanMove(): Array<[number, number]> {
        // 士只能移动在九宫格里面
        // 计算只能移动的空位
        return this.allMoveCoord().filter(item => {
            return !this.pieces.find(e => item[0] === e.coord.x && item[1] === e.coord.y)
        })
    }
    redScholarMove(): Array<[number, number]> {
        // 红士
        let map: Array<RegularXCoordMap> = [{
            coord: [[5, 9]],
            xCoord: 4,
        }, {
            coord: [[4, 10], [6, 10], [4, 8], [6, 8]],
            xCoord: 5,
        }, {
            coord: [[5, 9]],
            xCoord: 6,
        }]
        let blackScholarCoord = map.find(item => item.xCoord === this.x)
        return blackScholarCoord ? blackScholarCoord.coord : []
    }
    blackScholarMove(): Array<[number, number]> {
        // 黑士
        let map: Array<RegularXCoordMap> = [{
            coord: [[5, 2]],
            xCoord: 4,
        }, {
            coord: [[4, 1], [6, 1], [4, 3], [6, 3]],
            xCoord: 5,
        }, {
            coord: [[5, 2]],
            xCoord: 6,
        }]
        let redScholarCoord = map.find(item => item.xCoord === this.x)
        return redScholarCoord ? redScholarCoord.coord : []
    }
    computedCanEat() {
        // 判断这些点位上那些是有敌方棋子的就是可以吃的
        return this.allMoveCoord().filter(item => {
            return this.enemyPieceList.find(e => e.coord.x === item[0] && e.coord.y === item[1])
        })
    }
}

// 帅
class Boss extends Piece {
    constructor(coord: Point, pieces: Array<ChessPiece>, camp: Camp, currentExecution: Camp) {
        super(coord, pieces, camp, currentExecution)
    }
    allCanMove(): Array<[number, number]> {
        // 所有可以移动的空位和可以吃的位置
        return [...this.computedCanMove(), ...this.computedCanEat()]
    }
    allMoveCoord(): Array<[number, number]> {
        // 帅只能在九宫格里面移动
        // 先列举出可以移动的地方
        // 以帅为中心点 
        let map: Array<RegularXCoordMap> = [{
            coord: [[4, this.y - 1], [4, this.y + 1], [5, this.y]],
            xCoord: 4
        }, {
            coord: [[4, this.y], [6, this.y], [5, this.y - 1], [5, this.y + 1]],
            xCoord: 5
        }, {
            coord: [[6, this.y - 1], [6, this.y + 1], [6, this.y]],
            xCoord: 6
        }]
        let bossCoord = map.find(item => item.xCoord === this.x)
        let bossCanMoveCoord: Array<[number, number]> = bossCoord ? bossCoord.coord : []
        return this.camp === Camp.RED ? bossCanMoveCoord.filter(item => item[1] > 7 && item[1] < 11) : bossCanMoveCoord.filter(item => item[1] > 0 && item[1] < 4)
    }
    computedCanMove(): Array<[number, number]> {
        return this.allMoveCoord().filter(item => {
            return !this.pieces.find(e => item[0] === e.coord.x && item[1] === e.coord.y)
        })
    }
    computedCanEat(): Array<[number, number]> {
        // 判断这些点位上那些是有敌方棋子的就是可以吃的
        // 特殊判断将吃帅或者帅吃将
        // 如果y轴这一条线上只有将和帅那么就是可以吃
        let specialEatCoord = this.camp === Camp.RED ? this.canEatJiang() : this.canEatShuai()
        return [...this.allMoveCoord().filter(item => {
            return this.enemyPieceList.find(e => e.coord.x === item[0] && e.coord.y === item[1])
        }), ...specialEatCoord]
    }
    canEatJiang(): Array<[number, number]> {
        let pieceCoord: Array<[number, number]> = []
        for (let y = this.y - 1; y > 0; y--) {
            let piece: ChessPiece | undefined = this.pieces.find(e => this.x === e.coord.x && y === e.coord.y);
            if (piece) {
                if (piece.name === "將") {
                    pieceCoord.push([this.x, y])
                }
                break;
            }
        }
        return pieceCoord
    }
    canEatShuai(): Array<[number, number]> {
        let pieceCoord: Array<[number, number]> = []
        for (let y = this.y + 1; y < 11; y++) {
            let piece: ChessPiece | undefined = this.pieces.find(e => this.x === e.coord.x && y === e.coord.y);
            if (piece) {
                if (piece.name === "帥") {
                    pieceCoord.push([this.x, y])
                }
                break;
            }
        }
        return pieceCoord
    }
}

export {
    Piece,
    Soldier,
    BigGun,
    Horse,
    Vehicle,
    Elephant,
    Scholar,
    Boss
}