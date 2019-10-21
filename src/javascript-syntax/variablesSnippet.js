export const variablesSnippet = `
const areYouReady = true;
const string = "bar";
const number = 3;
const object = { nbWheels: 3 };
const array = [number, string, object];

let x = 3;
var y = z;

const fn = x => x - 1;
function fn2(x) {
  return x + 1;
}

const now = new Date();
const error = new Error();
const symbol = Symbol("myName");
`.trim();

export const objectSnippet = `
const me = { age: 25, name: "Jens" };
me.age += 1;
console.log(me); // { age: 26, name: 'Jens' }

const you = { ...me, name: "Fred" };
you.age = 21
console.log(you); // { age: 21, name: 'Fred' } 
console.log(me); // { age: 26, name: 'Jens' }

const { age } = me;
console.log(age); // 26

const { age: yourAge, ...otherValues } = you;
console.log(yourAge); // 21
console.log(otherValues); // { name: 'Fred' }
`.trim();

export const arraySnippet = `
const numbers = [1, 2, 3];
console.log([...numbers, true]);
// [ 1, 2, 3, true]

const [x, y, z] = numbers;
const [x, ...otherNumbers] = numbers;
`.trim();
