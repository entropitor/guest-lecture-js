class Person {}
class Adult extends Person {}
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
