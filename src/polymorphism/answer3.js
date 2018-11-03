class Person {}
class Adult extends Person {
  isAdult = true;
}
class Baby extends Person {
  isAdult = false;

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
