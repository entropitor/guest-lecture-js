const fibonnaci = `
function* fibonnaci() {
  let [prev, current] = [0, 1];

  while (true) {
    yield current;
    [prev, current] = [current, prev+current]
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
    if (i++ >= n) return;
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
${take}
${mapFilterSnippet}
${fibonnaci}

${exampleInfiniteListSnippet}
`.trim();

export const integratedFibonnaciSnippet = `
function* fibonnaci() {
  let [prev, current] = [0, 1];
  let i = 0;

  while (true) {
    if (i >= 10) break;

    const mapped = current * 3;
    if (mapped % 2 === 0) {
      i++;
      yield mapped;
    }
    [prev, current] = [current, prev+current]

  }
}
for (let i of fibonnaci()) {
  console.log(i);
}
`.trim();
