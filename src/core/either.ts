// Error
export class Left<L> {
  readonly value: L
  readonly type = 'left'

  constructor(value: L) {
    this.value = value
  }
}

// Success
export class Right<R> {
  readonly value: R
  readonly type = 'right'

  constructor(value: R) {
    this.value = value
  }
}

export type Either<L, R> = Left<L> | Right<R>

export const isRight = <L, R>(input: Either<L, R>): input is Right<R> => {
  return input.type === 'right'
}

export const isLeft = <L, R>(input: Either<L, R>): input is Left<L> => {
  return input.type === 'left'
}

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}
