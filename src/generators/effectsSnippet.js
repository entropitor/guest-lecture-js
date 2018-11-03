export const rngSnippet = `
function* algorithm() {
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
export const cloneableSnippet = `
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
`.trim();
export const with_Snippet = `
function with_(handler, generatorFn) {
  const iterator = cloneable(generatorFn);
  function recursionStep({ value, done, iterator }) {
    if (done) {
      const handle = handler.value || (v => v);
      return handle(value);
    }
    else {
      const handle = handler[value.symbol] || (_ => { throw new Error() });
      const k = val => recursionStep(iterator.clone().next(val));
      return handle(k);
    }
  }
  return recursionStep(iterator.next());
}
`.trim();
export const algebraicEffects = `
class Effect {
  constructor(name) {
    this.symbol = Symbol(name);
  }
}
const Decide = new Effect("decide");

${with_Snippet}

let continue_ = function(cont, expVal) {
  return cont(expVal);
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
`.trim();
