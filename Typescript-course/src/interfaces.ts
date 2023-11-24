//======================INTERFACES=========================

//extending interface
interface Named {
  readonly name: string;
  //optional properties
  outputName?: string;
}
interface Aged {
  readonly age: number;
}
interface Greetable extends Named, Aged {
  // name: string; use extending interface which has name prop already. Dont need this line anymore
  greet(phrase: string): void;
  pirntAge?(): void;
}

class Person implements Greetable {
  // name: string;
  readonly name: string;
  age: number;
  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
  pirntAge(): void {
    console.log("age from optional method: ", this.age);
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
// user1.name = "tao"; //Error beacause name is a readonly prop
console.log("user1", user1);

console.log("=========================");
//=============================Function types=====================
//type
type AddFn = (n: number) => number;
const doubleNumber: AddFn = (n: number) => {
  return n * 2;
};
console.log("function type: ", doubleNumber(234));
//interface
interface AddFnInterface {
  (numb1: number, numb2: number): number;
}

const addNumber: AddFnInterface = (n1: number, n2: number) => {
  return +n1 + +n2;
};
console.log("interface function type: ", addNumber(234, 234902));
console.log("================================");

user1.pirntAge();
