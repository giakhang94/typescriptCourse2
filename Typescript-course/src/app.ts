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
