export const iteratorSnippet = `
const x = ['a', 'b', 'c'];
x[Symbol.iterator] = () => {
  let i = 0;
  return {
    next() {
      if (i >= x.length) {
        return { done: true };
      }
      return { done: false, value: x[i++] };
    }
  };
};
for (const i of x) {
  console.log(i);
}
`.trim();
export const iteratorGeneratorSnippet = `
const x = ['a', 'b', 'c'];
function * iterateMyList (arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}
for (const i of iterateMyList(x)) {
  console.log(i);
}
`.trim();
export const introSnippet = `
function* myGen() {
  console.log("before yield");
  yield 1;
  console.log("between yields");
  yield 2;
  console.log("after yield");
  return 3;
}

const x = myGen();
x.next();
for (i of myGen()) {
  console.log(i);
}
`.trim();
export const introConvertedSnippet = `
function myGen() {
  return {
    next: function() {
      this.next = function() {
        this.next = function() {
          console.log("after yield");
          return { done: true, value: 3 };
        };
        console.log("between yield");
        return { done: false, value: 2 };
      };
      console.log("before yield");
      return { done: false, value: 1 };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
`.trim();
export const treeSnippet = `
function* traverseTree(node) {
  if (node == null) return;
  yield* traverseTree(node.left);
  yield node.value;
  yield* traverseTree(node.right);
}
`.trim();
