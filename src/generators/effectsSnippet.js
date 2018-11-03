export const rngSnippet = `
function* rng() {
  let x = 0; //x0
  const a = 25214903917;
  const c = 11;
  const m = Math.pow(2, 48);

  while (true) {
    yield x;
    x = (a * x + c) % m;
  }
}
`.trim();
export const advancedIteratorSnippet = `
function* rng() {
  let x = 0; //x0
  const a = 25214903917;
  const c = 11;
  const m = Math.pow(2, 48);

  while (true) {
    const provided = yield x;
    if (provided != null) {
      x = provided;
    }
    x = (a * x + c) % m;
  }
}
const myRandom = rng()
myRandom.next()
myRandom.next(3)
`.trim();
export const algebraicEffects = `
`.trim();

function Effect(name) {
  this.symbol = Symbol(name);
  this[Effect.symbol] = this.symbol;
}
Effect.symbol = Symbol("Effect");
const Value = new Effect("value");

const Fail = new Effect("fail");
const Decide = new Effect("decide");
let continue_ = function(k, ...args) {
  return k(...args);
};
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
  [Value.symbol](value) {
    return [value];
  },
  [Fail.symbol](_) {
    return [];
  },
  [Decide.symbol](k) {
    return [...continue_(k, true), ...continue_(k, false)];
  }
};

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
function with_(handler, iteratorFn) {
  const iterator = cloneable(iteratorFn);
  if (handler[Value.symbol] == null) {
    handler[Value.symbol] = val => val;
  }

  function recursionStep(handler, iterator, lastVal) {
    const { value, done } = iterator.next(lastVal);
    if (done) {
      return handler[Value.symbol](value);
    }

    const effect =
      value[Effect.symbol] != null ? value[Effect.symbol] : Value.symbol;
    if (handler[effect]) {
      const k = nextVal => {
        const it = iterator.clone();
        return recursionStep(handler, it, nextVal);
      };
      return handler[effect](k);
    }
    throw new Error(`handler ${effect} not implemented`);
  }
  return recursionStep(handler, iterator, null);
}

function* myBlock() {
  const x = (yield Decide) ? 10 : 20;
  const y = (yield Decide) ? 1 : 5;
  return x - y;
}

console.log(with_(chooseTrue, myBlock));
console.log(with_(chooseMax, myBlock));
console.log(with_(chooseAll, myBlock));
