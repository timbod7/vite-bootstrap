
import { assert, describe, expect, it } from 'vitest'

describe('example tests', () => {
  it('sqrt', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('addition', () => {
    expect(1 + 1).eq(2)
  })
})