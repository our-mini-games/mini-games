import { describe, it, expect } from 'vitest'
import { Tetrominos } from '../config'
import { getTetrisNextType } from '../lib/nextType'
import { createTetris } from '../lib/utils'

describe('Conversion of "I"', () => {
  /**
   * - 形态 1
   * ┌---------------┐
   * │   │   │   │   │
   * │[0]│[1]│[x]│[3]│
   * │   │   │   │   │
   * │   │   │   │   │
   * └---------------┘
   */
  const type1 = createTetris(Tetrominos.I, 1)
  /**
   * - 形态 2
   * ┌---------------┐
   * │   │   │[0]│   │
   * │   │   │[1]│   │
   * │   │   │[x]│   │
   * │   │   │[3]│   │
   * └---------------┘
   */
  const type2 = createTetris(Tetrominos.I, 2)
  /**
   * - 形态 3
   * ┌---------------┐
   * │   │   │   │   │
   * │   │   │   │   │
   * │[0]│[x]│[2]│[3]│
   * │   │   │   │   │
   * └---------------┘
   */
  const type3 = createTetris(Tetrominos.I, 3)
  /**
   * - 形态 4
   * ┌---------------┐
   * │   │[0]│   │   │
   * │   │[x]│   │   │
   * │   │[2]│   │   │
   * │   │[3]│   │   │
   * └---------------┘
   */
  const type4 = createTetris(Tetrominos.I, 4)

  it('Should transfer to type 2 from type 1', () => {
    const nextType = getTetrisNextType(type1)
    expect(nextType).toMatchObject(type2)
  })

  it('Should transfer to type 3 from type 2', () => {
    const nextType = getTetrisNextType(type2)
    expect(nextType).toMatchObject(type3)
  })

  it('Should transfer to type 4 from type 3', () => {
    const nextType = getTetrisNextType(type3)
    expect(nextType).toMatchObject(type4)
  })

  it('Should transfer to type 1 from type 4', () => {
    const nextType = getTetrisNextType(type4)
    expect(nextType).toMatchObject(type1)
  })
})

describe('Conversion of "L1"', () => {
  /**
   * - 形态 1
   * ┌-----------┐
   * │   │[0]│   │
   * │   │[x]│   │
   * │   │[2]│[3]│
   * └-----------┘
   */
  const type1 = createTetris(Tetrominos.L1, 1)
  /**
   * - 形态 2
   * ┌-----------┐
   * │   │   │   │
   * │[0]│[x]│[2]│
   * │[3]│   │   │
   * └-----------┘
   */
  const type2 = createTetris(Tetrominos.L1, 2)
  /**
   * - 形态 3
   * ┌-----------┐
   * │[0]│[1]│   │
   * │   │[x]│   │
   * │   │[3]│   │
   * └-----------┘
   */
  const type3 = createTetris(Tetrominos.L1, 3)
  /**
   * - 形态 4
   * ┌-----------┐
   * │   │   │[0]│
   * │[1]│[x]│[3]│
   * │   │   │   │
   * └-----------┘
   */
  const type4 = createTetris(Tetrominos.L1, 4)

  it('Should transfer to type 2 from type 1', () => {
    const nextType = getTetrisNextType(type1)
    expect(nextType).toMatchObject(type2)
  })

  it('Should transfer to type 3 from type 2', () => {
    const nextType = getTetrisNextType(type2)
    expect(nextType).toMatchObject(type3)
  })

  it('Should transfer to type 4 from type 3', () => {
    const nextType = getTetrisNextType(type3)
    expect(nextType).toMatchObject(type4)
  })

  it('Should transfer to type 1 from type 4', () => {
    const nextType = getTetrisNextType(type4)
    expect(nextType).toMatchObject(type1)
  })
})

describe('Conversion of "L2"', () => {
  /**
   * - 形态 1
   * ┌-----------┐
   * │   │[0]│   │
   * │   │[x]│   │
   * │[2]│[3]│   │
   * └-----------┘
   */
  const type1 = createTetris(Tetrominos.L2, 1)
  /**
   * - 形态 2
   * ┌-----------┐
   * │[0]│   │   │
   * │[1]│[x]│[3]│
   * │   │   │   │
   * └-----------┘
   */
  const type2 = createTetris(Tetrominos.L2, 2)
  /**
   * - 形态 3
   * ┌-----------┐
   * │   │[0]│[1]│
   * │   │[x]│   │
   * │   │[3]│   │
   * └-----------┘
   */
  const type3 = createTetris(Tetrominos.L2, 3)
  /**
   * - 形态 4
   * ┌-----------┐
   * │   │   │   │
   * │[0]│[x]│[2]│
   * │   │   │[3]│
   * └-----------┘
   */
  const type4 = createTetris(Tetrominos.L2, 4)

  it('Should transfer to type 2 from type 1', () => {
    const nextType = getTetrisNextType(type1)
    expect(nextType).toMatchObject(type2)
  })

  it('Should transfer to type 3 from type 2', () => {
    const nextType = getTetrisNextType(type2)
    expect(nextType).toMatchObject(type3)
  })

  it('Should transfer to type 4 from type 3', () => {
    const nextType = getTetrisNextType(type3)
    expect(nextType).toMatchObject(type4)
  })

  it('Should transfer to type 1 from type 4', () => {
    const nextType = getTetrisNextType(type4)
    expect(nextType).toMatchObject(type1)
  })
})

describe('Conversion of "S"', () => {
  /**
   * - 形态 1
   * ┌-----------┐
   * │   │[0]│[1]│
   * │[2]│[x]│   │
   * │   │   │   │
   * └-----------┘
   */
  const type1 = createTetris(Tetrominos.S, 1)
  /**
   * - 形态 2
   * ┌-----------┐
   * │   │[0]│   │
   * │   │[x]│[2]│
   * │   │   │[3]│
   * └-----------┘
   */
  const type2 = createTetris(Tetrominos.S, 2)
  /**
   * - 形态 3
   * ┌-----------┐
   * │   │   │   │
   * │   │[x]│[1]│
   * │[2]│[3]│   │
   * └-----------┘
   */
  const type3 = createTetris(Tetrominos.S, 3)
  /**
   * - 形态 4
   * ┌-----------┐
   * │[0]│   │   │
   * │[1]│[x]│   │
   * │   │[3]│   │
   * └-----------┘
   */
  const type4 = createTetris(Tetrominos.S, 4)

  it('Should transfer to type 2 from type 1', () => {
    const nextType = getTetrisNextType(type1)
    expect(nextType).toMatchObject(type2)
  })

  it('Should transfer to type 3 from type 2', () => {
    const nextType = getTetrisNextType(type2)
    expect(nextType).toMatchObject(type3)
  })

  it('Should transfer to type 4 from type 3', () => {
    const nextType = getTetrisNextType(type3)
    expect(nextType).toMatchObject(type4)
  })

  it('Should transfer to type 1 from type 4', () => {
    const nextType = getTetrisNextType(type4)
    expect(nextType).toMatchObject(type1)
  })
})

describe('Conversion of "Z"', () => {
  /**
   * - 形态 1
   * ┌-----------┐
   * │[0]│[1]│   │
   * │   │[x]│[3]│
   * │   │   │   │
   * └-----------┘
   */
  const type1 = createTetris(Tetrominos.Z, 1)
  /**
   * - 形态 2
   * ┌-----------┐
   * │   │   │[0]│
   * │   │[x]│[2]│
   * │   │[3]│   │
   * └-----------┘
   */
  const type2 = createTetris(Tetrominos.Z, 2)
  /**
   * - 形态 3
   * ┌-----------┐
   * │   │   │   │
   * │[0]│[x]│   │
   * │   │[2]│[3]│
   * └-----------┘
   */
  const type3 = createTetris(Tetrominos.Z, 3)
  /**
   * - 形态 4
   * ┌-----------┐
   * │   │[0]│   │
   * │[1]│[x]│   │
   * │[3]│   │   │
   * └-----------┘
   */
  const type4 = createTetris(Tetrominos.Z, 4)

  it('Should transfer to type 2 from type 1', () => {
    const nextType = getTetrisNextType(type1)
    expect(nextType).toMatchObject(type2)
  })

  it('Should transfer to type 3 from type 2', () => {
    const nextType = getTetrisNextType(type2)
    expect(nextType).toMatchObject(type3)
  })

  it('Should transfer to type 4 from type 3', () => {
    const nextType = getTetrisNextType(type3)
    expect(nextType).toMatchObject(type4)
  })

  it('Should transfer to type 1 from type 4', () => {
    const nextType = getTetrisNextType(type4)
    expect(nextType).toMatchObject(type1)
  })
})

describe('Conversion of "T"', () => {
  /**
   * - 形态 1
   * ┌-----------┐
   * │   │   │   │
   * │[0]│[x]│[2]│
   * │   │[3]│   │
   * └-----------┘
   */
  const type1 = createTetris(Tetrominos.T, 1)
  /**
   * - 形态 2
   * ┌-----------┐
   * │   │[0]│   │
   * │[1]│[x]│   │
   * │   │[3]│   │
   * └-----------┘
   */
  const type2 = createTetris(Tetrominos.T, 2)
  /**
   * - 形态 3
   * ┌-----------┐
   * │   │[0]│   │
   * │[1]│[x]│[3]│
   * │   │   │   │
   * └-----------┘
   */
  const type3 = createTetris(Tetrominos.T, 3)
  /**
   * - 形态 4
   * ┌-----------┐
   * │   │[0]│   │
   * │   │[x]│[2]│
   * │   │[3]│   │
   * └-----------┘
   */
  const type4 = createTetris(Tetrominos.T, 4)

  it('Should transfer to type 2 from type 1', () => {
    const nextType = getTetrisNextType(type1)
    expect(nextType).toMatchObject(type2)
  })

  it('Should transfer to type 3 from type 2', () => {
    const nextType = getTetrisNextType(type2)
    expect(nextType).toMatchObject(type3)
  })

  it('Should transfer to type 4 from type 3', () => {
    const nextType = getTetrisNextType(type3)
    expect(nextType).toMatchObject(type4)
  })

  it('Should transfer to type 1 from type 4', () => {
    const nextType = getTetrisNextType(type4)
    expect(nextType).toMatchObject(type1)
  })
})
