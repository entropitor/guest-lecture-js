function cloneable(iteratorFn) {
  const values = [];
  const iterator = iteratorFn();
  return {
    next(val) {
      values.push(val);
      return iterator.next(val);
    },
    clone() {
      const it = cloneable(iteratorFn);
      for (value of values) {
        it.next(value);
      }
      return it;
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
function doM(monad, iterator, val = null) {
  let { value, done } = iterator.next(val);
  if (done) {
    return value;
  }
  return monad.bind(value, val => {
    const it = iterator.clone();
    return doM(monad, it, val);
  });
}
function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}
const listMonad = {
  return(x) {
    return [x];
  },
  bind(xs, fn) {
    return flattenArray(xs.map(x => fn(x)));
  }
};
const maybeMonad = {
  return(x) {
    return x;
  },
  bind(x, fn) {
    if (x == null) {
      return null;
    } else {
      return fn(x);
    }
  }
};
function* doBlockList() {
  const x = yield [0, 5];
  const y = yield [10, 20];
  return y - x;
}
function* doBlockMaybe() {
  const x = yield 3;
  const z = yield null;
  const y = yield 5;
  return x + y;
}
console.log(doM(listMonad, cloneable(doBlockList)));
console.log(doM(maybeMonad, cloneable(doBlockMaybe)));
