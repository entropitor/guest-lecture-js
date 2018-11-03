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

const just = x => ({ type: "just", value: x });
const nothing = { type: "nothing" };
const maybeMonad = {
  return(x) {
    return just(x);
  },
  bind(x, fn) {
    if (x.type === "nothing") {
      return nothing;
    } else {
      return fn(x.value);
    }
  }
};
function* doBlockMaybe() {
  const x = yield just(3);
  const z = yield nothing;
  const y = yield this.return(5);
  return this.return(x + y);
}
console.log(doM(maybeMonad, doBlockMaybe));
