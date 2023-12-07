//==========================Intersection Type====================
type Named = {
  name: string;
  roles: string[];
};

type Email = {
  email: string;
};

interface PrintFn {
  printFn(): void;
}
type User = Named & Email & PrintFn;

let user1: User = {
  roles: ["admin"],
  name: "Khang",
  email: "khang@gmail.com",
  printFn() {
    console.log("print method using intersction: tao");
  },
};

user1.printFn();
console.log("========================");
//==========================Type Guards==========================
type Combinable = string | Number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

const add = (a: Combinable, b: Combinable) => {
  //type guards
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return +a + +b;
};

//===
interface Admin {
  name: string;
  privileges: string[];
}
interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: ", emp.name); // Both Admin and Employee have name prop
  // console.log('Privileges: ', emp.privileges) //error because only Admin has the name prop
  // we should use the "in" keyword of Javascript to check if a props is in emp object or not
  if ("privileges" in emp) {
    console.log("privileges: ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log(
      "start date: ",
      emp.startDate.getDate().toString() +
        " thang " +
        (emp.startDate.getMonth() + 1).toString() +
        " nam " +
        emp.startDate.getFullYear().toString()
    );
  }
}
console.log('type guards using "in" keyword');
let user2: UnknownEmployee = {
  name: "tao",
  privileges: ["author", "admin"],
  startDate: new Date(Date.now()),
};
printEmployeeInformation(user2);

console.log("=======");

console.log("instance of Type guards - uses for classes");
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const vehicle1 = new Car();
const vehicle2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(2250);
  }
}

useVehicle(vehicle2);
console.log("typeof an instance base on a class: ", typeof vehicle1); //object
console.log("=========================");
//===DISCRIMINATE UNION - TYPE GUARDS==
//a special type of type guards, or something that helps you with the type guards
//It's a pattern which you can use when working with union types
//that makes implement type guards easier
//It is available when you work with object types
//give every interface or every object which should be part of the Union an Extra property
//can use any name we want, but often use "kind", "type"
console.log("type gurads - discriminate union");
interface Bird {
  type: "bird";
  flyingSpeech: number;
}
interface Horse {
  type: "horse";
  runningSpeech: number;
}

type Animal = Bird | Horse;
const moveAnimal = (animal: Animal) => {
  switch (animal.type) {
    case "bird":
      console.log("Moving speach : ", animal.flyingSpeech);
      break;
    case "horse":
      console.log("Moving speech: ", animal.runningSpeech);
  }
};
let Parakeet: Animal = {
  type: "bird",
  flyingSpeech: 125,
};
moveAnimal(Parakeet);
console.log("==============");
//======Type casting===
console.log("Type casting");
const paragraph = document.querySelector("p");
const paragraphById = document.getElementById("tao");
const input = document.getElementById("inputCasting")! as HTMLInputElement;
console.log("print input value: ", input.value);
const input2 = <HTMLInputElement>document.getElementById("tao");
console.log(input2.value);
console.log("==========");
//=======index properties==========
//index type: A feature that allows us to create objects
//which are more flexible regarding the properties thay might hold
interface ErrorContainer {
  //{email: 'not a valid email', username: 'must start with a character'}
  [prop: string]: string;
  //k can biet obj có props là gì
  //cũng k cần biết có bao nhiêu props
  //chỉ cần biết tất cả các props được add vào trong objec này (base on ErrorContainer interface)
  //phải có 1 property name với kiểu string
  // và value của property đó cũng phải là kiểu string
  id: string;
  //có thể ad thêm props ví dụ: id: string
  //type của id buộc phải là string (phải giống vs index type)
  //phải giống type với phần value của prop. Type của prop khai sao cũng được
}

const errorBag: ErrorContainer = {
  email: "not a valid email",
  id: "1023932",
  username: "must start with a capital character",
};

//=====function overload=======
console.log("===============");
console.log("function overload");
function addOverload(a: number, b: number): number;
function addOverload(a: string, b: string): string;
function addOverload(a: Combinable, b: string): string;
function addOverload(a: string, b: Combinable): string;
function addOverload(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return +a + +b;
}
const result = addOverload(12, 23);

// result.split('') => Error cause TS don't know if result is a number or string
console.log(result);
//========optional chain======
console.log("============");
console.log("optional chaining");
const fetchedUserData = {
  id: "u1",
  name: "Khang",
  job: { description: "My own company", title: "CEO" },
};
console.log(fetchedUserData.job.title);
//optional chaining:
//add the question mark after the thing you dont know
//if there's a property that you want to get or not
//==============
console.log("=======");
console.log(
  "Nullish Coalescing: Avoid only 2 falsy values: undefined and null"
);
let data;
data = null || "default";
console.log("nul || default: ", data);
data = NaN || "default";
console.log("NaN || default: ", data);
data = NaN ?? "default";
console.log("NaN??default", data);
data = undefined ?? "default";
console.log("undefined ?? default: ", data);
data = false ?? "default";
console.log("false ?? default: ", data);
