function cloneable(generatorFn) {
  const values = [];
  const iterator = generatorFn();
  return {
    next(val) {
      values.push(val);
      return { ...iterator.next(val), iterator: this };
    },
    clone() {
      const it = cloneable(generatorFn);
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
function fakeCloneable(generatorFn) {
  const iterator = generatorFn();
  return {
    next(val) {
      return { ...iterator.next(val), iterator: this };
    },
    clone() {
      return this;
    }
  };
}
function doM(monad, generatorFn) {
  const cloneable_ = monad.forbidCloning ? fakeCloneable : cloneable;
  const generatorFn_ = generatorFn.bind(monad);
  const iterator = cloneable_(generatorFn_);
  function recursionStep({ value, done, iterator }) {
    if (done) {
      return value;
    } else {
      const k = val => recursionStep(iterator.clone().next(val));
      return monad.bind(value, k);
    }
  }
  return recursionStep(iterator.next());
}
function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat([...val]), []);
}
const listMonad = {
  return(x) {
    return [x];
  },
  bind(xs, fn) {
    return flattenArray(xs.map(x => fn(x)));
  }
};
function* doBlockList() {
  const x = yield [10, 20];
  const y = yield [0, 5];
  return this.return(x - y);
}
console.log(doM(listMonad, doBlockList));
