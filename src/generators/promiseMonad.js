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

const promiseMonad = {
  forbidCloning: true,
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
    }, 5000);
  });
};
function* doBlockPromise() {
  const url = yield this.return("https://google.be");
  const google = yield getFromNetwork(url);
  console.log(google);
  const fb = yield getFromNetwork("https://facebook.com");
  console.log(fb);
  return this.return(null);
}
function async(generator) {
  return () => doM(promiseMonad, generator);
}
const doBlockPromiseAsync = async(function* doBlockPromise() {
  const url = yield "https://google.be";
  const google = yield getFromNetwork(url);
  console.log(google);
  const fb = yield getFromNetwork("https://facebook.com");
  console.log(fb);
  return null;
});
async function doBlockPromiseAsync2() {
  const url = await "https://google.be";
  const google = await getFromNetwork(url);
  console.log(google);
  const fb = await getFromNetwork("https://facebook.com");
  console.log(fb);
  return null;
}
console.log(doM(promiseMonad, doBlockPromise));
