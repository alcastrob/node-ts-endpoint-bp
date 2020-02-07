export default class MiscClass {
  doThings(value: any) {
    const returnedValue = {
      text: 'hello world!',
      val: value,
    }
    return returnedValue
  }
}