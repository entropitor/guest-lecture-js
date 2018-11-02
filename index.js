function* fibonnaci() {
  let a = 1;
  let b = 1;
  yield 1;
  while (true) {
    [a, b] = [b, a + b];
    yield a;
  }
}
let f = fibonnaci();
f.next();
