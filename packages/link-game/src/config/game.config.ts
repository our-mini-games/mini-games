export enum Level {
  // eslint-disable-next-line no-unused-vars
  easy,
  // eslint-disable-next-line no-unused-vars
  middle,
  // eslint-disable-next-line no-unused-vars
  hard,
  // eslint-disable-next-line no-unused-vars
  extreme
}

export enum GameStatus {
  // eslint-disable-next-line no-unused-vars
  finished,
  // eslint-disable-next-line no-unused-vars
  playing,
  // eslint-disable-next-line no-unused-vars
  paused,
  // eslint-disable-next-line no-unused-vars
  complete,
  // eslint-disable-next-line no-unused-vars
  defeat,
  // eslint-disable-next-line no-unused-vars
  'in-the-animation'
}

export const itemSequences = (() => Array.from({ length: 271 }, (_, i) => i + 1))()
