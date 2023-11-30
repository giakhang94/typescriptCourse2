//Generic types
//what is generic
console.log("Generic type");
const names: Array<string> = ["Khang", "Phuong"]; //string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});
promise.then((data) => console.log("Generic promise", data)); //data is type of string
//=========================CUSTOM GENERIC TYPE
console.log("===================");
console.log("custom generic type");

//without generic type
function merge(objA: object, objB: object) {
  return { ...objA, ...objB };
}
const result = merge({ tao: "Khang" }, { age: 28 });

console.log("generic type: ", merge({ tao: "Khang" }, { age: 29 }));
// console.log(result.age); Error because TS dont know type/structure of result variable

//with generic type sơ khai
function merge2<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}
const result2 = merge2({ tao: "Khang2" }, { age: 29 });
console.log(result2.age);
//with generic more complex
const merge3 = <T extends object, U extends object>(objA: T, objB: U) => {
  return { ...objA, ...objB };
};
const result3 = merge3({ tao: "Khang3" }, { age: 29 });
// const result31 = merge3("Khang", { age: 29 });
// Error because the 1st argument must be an object
console.log("================");
//============================
console.log("another generic function");

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length > 0) {
    descriptionText = `got ${element.length} length value`;
  }
  return [element, descriptionText];
}
let res = countAndPrint("Hi there!");
console.log(res);

console.log("================");
//============================
console.log("the 'keyof' constraint");

function printKeyValue<T>(obj: T, key: keyof T) {
  return obj[key];
}
console.log(printKeyValue({ tao: "123" }, "tao"));
console.log("===============");
//============================
console.log("Generic classes");
class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

let store1 = new DataStorage<number>();
store1.addItem(12);
// store1.addItem("tao"); //Error, generic type is number
//===================================
console.log("=====================");
console.log("Generic Utility Types");

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
