const fibonnaci = `
function* fibonnaci() {
  let a = 1;
  let b = 1;

  yield 1;
  while (true) {
    [a, b] = [b, a + b];
    yield a;
  }
}
`.trim();
export const lazyFibonnaciSnippet = `
${fibonnaci}
for (let i of fibonnaci()) {
  if (i > 1000) break;
  console.log(i);
}
`.trim();

const take = `
function* take(iterator, n) {
  let i = 0;

  for (let el of iterator) {
    if (i++ >= n) break;
    yield el;
  }
}
`.trim();
export const takeSnippet = `
${take}
for (let i of take(fibonnaci(), 10)) {
  console.log(i);
}
`.trim();

export const mapFilterSnippet = `
function* map(iterator, fn) {
  for (let el of iterator) {
    yield fn(el);
  }
}
function* filter(iterator, fn) {
  for (let el of iterator) {
    if (fn(el)) {
      yield el;
    }
  }
}
`.trim();
export const exampleInfiniteListSnippet = `
let f = fibonnaci();
f = map(f, x => x * 3);
f = filter(f, x => x % 2 === 0);
f = take(f, 10);
for (let i of f) {
  console.log(i);
}
`.trim();
export const lazyFibonnaciFullSnippet = `
${fibonnaci}
${take}
${mapFilterSnippet}
${exampleInfiniteListSnippet}
`.trim();

export const integratedFibonnaciSnippet = `
function* fibonnaci() {
  let a = 1;
  let b = 1;
  let i = 0;

  yield 1;
  while (true) {
    if (i >= 10 - 1) break;
    [a, b] = [b, a + b];
    const x = a * 3;
    if (x % 2 === 0) {
      i++;
      yield x;
    }
  }
}
for (let i of fibonnaci()) {
  console.log(i);
}
`.trim();
