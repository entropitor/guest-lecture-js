export const cloneableMonadSnippet = `
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
export const fakeCloneableSnippet = `
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
`.trim();
export const doMSnippetWithCloning = `
function doM(monad, generatorFn) {
  const cloneable_ = monad.allowCloning ? cloneable : fakeCloneable;
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
`.trim();
export const doMSnippet = `
function doM(monad, generatorFn) {
  // Allow accessing this.return by using Function.prototype.call
  const iterator = generatorFn.call(monad);
  function recursionStep({ value, done }) {
    if (done) {
      return value;
    } else {
      const k = val => recursionStep(iterator.next(val));
      return monad.bind(value, k);
    }
  }
  return recursionStep(iterator.next());
}
`.trim();
export const listMonadSnippet = `
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
`.trim();

export const maybeMonadDefinitionSnippet = `
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
`.trim();
export const maybeMonadUsageSnippet = `
function* doBlockMaybe() {
  const x = yield just(3);
  const z = yield nothing;
  const y = yield this.return(5);
  return this.return(x + y);
}
console.log(doM(maybeMonad, doBlockMaybe));
`.trim();

export const promiseMonadDefinitionSnippet = `
const promiseMonad = {
  return(x) {
    return Promise.resolve(x);
  },
  bind(x, fn) {
    return x.then(fn);
  }
};
const getFromNetwork = url => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("hello from " + url);
    }, 1500);
  });
};
`.trim();
export const promiseCallbackUsageSnippet = `
function doSomethingAsyncCallback(callback) {
  getGoogleUrl(url => {
    fetchFromNetwork(url, google => {
      console.log(google)
      fetchFromNetwork("https://facebook.com", facebook => {
        console.log(facebook)
        callback()
      })
    })
  })
}
`.trim();
export const promiseNonMonadUsageSnippet = `
function doSomethingAsync() {
  return Promise
    .resolve("https://google.be")
    .then(url => getFromNetwork(url))
    .then(google => {
      console.log(google);
      return getFromNetwork("https://facebook.com")
    })
    .then(fb => {
      console.log(fb);
    })
}
`.trim();
export const promiseMonadUsageSnippet = `
function* doBlockPromise() {
  const url = yield this.return("https://google.be");
  const google = yield getFromNetwork(url);
  console.log(google);
  const fb = yield getFromNetwork("https://facebook.com");
  console.log(fb);
}
console.log(doM(promiseMonad, doBlockPromise));
`.trim();
export const asyncIntroSnippet = `
function async(generator) {
  return () => doM(promiseMonad, generator);
}
const doBlockPromiseAsync = async(function* doBlockPromise() {
  const url = yield "https://google.be";
  const google = yield getFromNetwork(url);
  console.log(google);
  const fb = yield getFromNetwork("https://facebook.com");
  console.log(fb);
});`.trim();
export const asyncRealSnippet = `
const doBlockPromiseAsync2 = async function () {
  const url = await "https://google.be";
  const google = await getFromNetwork(url);
  console.log(google);
  const fb = await getFromNetwork("https://facebook.com");
  console.log(fb);
}
`.trim();
