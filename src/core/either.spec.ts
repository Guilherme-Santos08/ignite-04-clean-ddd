import { Either, isLeft, isRight, left, right } from '@/core/either'

function doSomeThing(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10)
  } else {
    return left('error')
  }
}

test('success result', () => {
  const result = doSomeThing(true)

  expect(isRight(result)).toBe(true)
  expect(isLeft(result)).toBe(false)
})

test('error result', () => {
  const result = doSomeThing(false)

  expect(isLeft(result)).toBe(true)
  expect(isRight(result)).toBe(false)
})
