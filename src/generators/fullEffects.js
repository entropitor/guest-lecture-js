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
class Effect {
  constructor(name) {
    this.symbol = Symbol(name);
  }
}

function with_(handler, generatorFn) {
  const iterator = cloneable(generatorFn);
  function recursionStep({ value, done, iterator }) {
    if (done) {
      const handle = handler.value || (v => v);
      return handle(value);
    } else {
      const handle =
        handler[value.symbol] ||
        (_ => {
          throw new Error();
        });
      const k = nextVal => recursionStep(iterator.clone().next(nextVal));
      return handle(k);
    }
  }
  return recursionStep(iterator.next());
}

let continue_ = function(cont, expVal) {
  return cont(expVal);
};
const Decide = new Effect("decide");
let chooseTrue = {
  [Decide.symbol](k) {
    return continue_(k, true);
  }
};
let chooseMax = {
  [Decide.symbol](k) {
    return Math.max(continue_(k, true), continue_(k, false));
  }
};
let chooseAll = {
  value(value) {
    return [value];
  },
  [Decide.symbol](k) {
    return [...continue_(k, true), ...continue_(k, false)];
  }
};

function* myBlock() {
  const x = (yield Decide) ? 10 : 20;
  const y = (yield Decide) ? 0 : 5;
  return x - y;
}

console.log(with_(chooseTrue, myBlock));
console.log(with_(chooseMax, myBlock));
console.log(with_(chooseAll, myBlock));
