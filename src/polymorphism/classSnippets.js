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

  celebrateBirthday() {
    this.age += 1;
  }
}


function Person(age) {
  this.age = age;
}

Person.prototype.celebrateBirthday = () => {
  this.age += 1;
};

Person.getKind = function() {
  return "Human";
};
`.trim();
