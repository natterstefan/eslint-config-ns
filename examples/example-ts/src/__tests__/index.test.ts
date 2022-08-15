import { returnTypeOf } from '..'

describe('returnTypeOf', () => {
  it.each([['string', 'string']])(
    '%s returns typeof %s',
    (input, expectedResult) => {
      expect(returnTypeOf(input)).toBe(expectedResult)
    },
  )
})
