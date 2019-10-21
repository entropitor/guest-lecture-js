export const introSnippet = `
class Person {
  constructor(age) {
    this.age = age;
  }

  celebrateBirthday() {
    this.age += 1;
  }
}
`.trim();
export const introConvertedSnippet = `
class Person {
  static getKind() => 'Human'

  constructor(age) {
    this.age = age;
  }

  celebrateBday() {
    this.age += 1;
  }
}


function Person(age) {
  this.age = age;
}

Person.prototype.celebrateBday = () => {
  this.age += 1;
};

Person.getKind = () => {
  return "Human";
};

const me = new Person(24);
`.trim();

export const mixinSnippet = `
const Ninja = {
  throwNinjaStar () {
    console.log('Throwing ninja star')
  }
}

const Bird = {
  fly () {
    console.log('Flying')
  }
}

function NinjaBird () {};
NinjaBird.prototype = {...ninja, ...bird};
`.trim();
export const mixin2Snippet = `
// This function exists already
Object.create = function (prototype) {
  const obj = {}
  Object.setPrototypeOf(obj, prototype)
  return obj
}
const NinjaBird = {...ninja, ...bird};
const ninjaBird = Object.create(NinjaBird);
`.trim();
export const changeClassTaskSnippet = `
class Person {}
class Adult extends Person {
  constructor() {
    super();
    this.isAdult = true;
  }
}
class Baby extends Person {
  constructor() {
    super();
    this.isAdult = false;
  }

  growUp() {
    // TODO: Let's implement it
  }
}

const baby = new Baby();
console.log(baby.__proto__); // Baby
console.log(baby.isAdult); // false
baby.growUp();
console.log(baby.__proto__); // Adult
console.log(baby.isAdult); // true
`.trim();
export const changeClassAnswerSnippet = `
class Person {}
class Adult extends Person {
  constructor() {
    super();
    this.isAdult = true;
  }
}
class Baby extends Person {
  constructor() {
    super();
    this.isAdult = false;
  }

  growUp() {
    Object.setPrototypeOf(this, Adult);
  }
}

const baby = new Baby();
console.log(baby.__proto__); // Baby
console.log(baby.isAdult); // false
baby.growUp();
console.log(baby.__proto__); // Adult
console.log(baby.isAdult); // true
`.trim();
export const changeClassImprovedAnswerSnippet = `
class Person {}
class Adult extends Person {
  constructor() {
    super();
    this.isAdult = true;
  }
}
class Baby extends Person {
  constructor() {
    super();
    this.isAdult = false;
  }

  growUp() {
    Object.setPrototypeOf(this, Adult.prototype);
  }
}

const baby = new Baby();
console.log(baby.__proto__); // Baby
console.log(baby.isAdult); // false
baby.growUp();
console.log(baby.__proto__); // Adult
console.log(baby.isAdult); // true
`.trim();
export const changeClassFinalAnswerSnippet = `
class Person {}
class Adult extends Person {
  isAdult = true
}
class Baby extends Person {
  isAdult = false

  growUp() {
    Object.setPrototypeOf(this, Adult.prototype);
  }
}

const baby = new Baby();
console.log(baby.__proto__); // Baby
console.log(baby.isAdult); // false
baby.growUp();
console.log(baby.__proto__); // Adult
console.log(baby.isAdult); // true
`.trim();
export const changeClassFinalAnswerCurrentSyntaxSnippet = `
class Person {}
class Adult extends Person { }
Adult.prototype.isAdult = true;
class Baby extends Person {
  growUp() {
    Object.setPrototypeOf(this, Adult.prototype);
  }
}
Baby.prototype.isAdult = false;

const baby = new Baby();
console.log(baby.__proto__); // Baby
console.log(baby.isAdult); // false
baby.growUp();
console.log(baby.__proto__); // Adult
console.log(baby.isAdult); // true
`.trim();
