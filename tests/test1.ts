import dummy from '../src/Application/misc'

const dummyApp = new dummy()

describe('calculate', () => {
  it('add', () => {
    const result = dummyApp.doThings(123)
    // tslint:disable-next-line:no-console
    // console.log(result.val)
    expect(result.val).toBe(122)
  })
})
