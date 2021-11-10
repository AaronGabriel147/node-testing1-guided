describe('Intro to testing', () => {
  test('sanity', () => { // test
    // assertions are usually closely related
    expect(true).toBe(true) // assertion
    expect(true).not.toBe(false) // another assertion
  })

  it('works', () => {
    const expectedValue = 8
    const actualValue = 8 // this usually comes from the function we're testing
    expect(actualValue).toBe(expectedValue)
  })
})

describe('comparing values', () => {
  test('objects and arrays', () => {
    expect({}).not.toBe({}) // toBe does not work with objects like we expect!
    expect([]).not.toBe([])
    // if one assertion fails, the whole test fails!
    expect({}).toEqual({})
    // these are better than toEqual:
    expect({ a: 1, b: 2 }).toMatchObject({ b: 2 })
    expect({ a: 1, b: 2 }).toHaveProperty('a')
    expect({ a: 1, b: 2 }).toHaveProperty('b', 2)
    // the actual usually comes from a function we're testing
    function foo() { return 'foo' } // comes from a different file
    
  })
})
