//======================INTERFACES=========================
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;
  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}
let user1 = new Person("Khang", 29);
// let user1: Greetable = {
//   name: "Khang",
//   age: 29,
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };
user1.greet("Hello");
console.log("user1", user1);
