export const introSnippet = `
function * myGen() {
  console.log('before yield')
  yield 1
  console.log('between yields')
  yield 2
  console.log('after yield')
  return 3
}
const x = myGen()
x.next()
x.next()
x.next()
`.trim();
export const introConvertedSnippet = `
function myGen () {
  const x = {
    next: function () {
      this.next = function () {
        this.next = function () {
          console.log('after yield')
          return {done: true, value: 3}
        }
        console.log('between yield')
        return {done: false, value: 2}
      }
      console.log('before yield')
        return {done: false, value: 1}
    }
  }
  x[Symbol.iterator] = () => x
  return x
}
const x = myGen()
x.next()
x.next()
x.next()
`.trim();
