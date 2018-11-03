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
