// let name2 = "Songoku";
class Department {
  // name: string;
  // name2: string;
  // #employees: string[] = []; Javascript syntax
  private employees: string[] = [];
  static tao = "admin Khang cute vũ trụ";
  constructor(protected name: string, public name2: string = "2000") {
    // this.name = n;
    // this.name2 = n2;
  }
  describe(): void {
    let name: string = "hi";
    console.log(`hello from name in this scope: ${name}`); //heelo from department Hi
    console.log("hello from department: ", this.name); //hello from tao
    // console.log("heelo from name2 outside: ", name2); //hello from name2 outside Songoku
    // console.log("hello from this.name2: ", this.name2); //hello Vegeta
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeCount() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  //static method
  static createEmployee(name: string) {
    // return new Department("new employee", "test static method"); //worked
    // console.log(this.tao); only work in static path
    return { name };
  }
  static logRandom() {
    console.log("test static method", Math.random());
  }
}

const department1 = new Department("tao", "vegeta");

console.log(department1);
department1.describe();

//private and public
// department1.employees.push('new employee') //Error if employees is a priavate prop
department1.addEmployee("Khang");
department1.addEmployee("Phuong");
// department1.#employees[2] = "5"; //Error if employees is a private prop+
department1.printEmployeeCount();

console.log("============================");
//=================================
// const department2 = { hello2: department1.describe };
// // department2.name = "Frieza";
// console.log(department2);
// department2.hello2();

//======================================STATIC METHODS AND PROPERTIES==============================
const employee = Department.createEmployee("New static Employee");
console.log("crate employee (statci method): ", employee);
Department.logRandom();
console.log("test static property: ", Department.tao);

console.log("============================");
//======================================INHERITANCE - ENCAPSULATION================================
class ITDepartment extends Department {
  private newComputer: string;
  admins: string[] = [];
  computers: string[] = [];

  constructor(name: string, admins: string[]) {
    super(name);
    this.admins = admins;
    this.newComputer = this.computers[0];
  }
  listComputers(): void {
    console.log("list computer: ", this.computers);
  }
  addComputer(computer: string): void {
    this.computers.push(computer);
    this.newComputer = computer;
  }
  get getNewComputer() {
    if (this.newComputer) {
      return this.newComputer;
    } else {
      throw new Error("No new computer found");
    }
  }
  //setter
  set setNewComputer(computer: string) {
    if (!computer) {
      throw new Error("please provide the new computer as string");
    } else {
      this.addComputer(computer);
    }
  }
  //abstract classes
  describe() {
    console.log("Abstrac test, duplicate method: ", this.name);
  }
}
const teamIT = new ITDepartment("Dev1", ["admin1"]);
// teamIT.addEmployee("tester added");
teamIT.addComputer("Dell Latitude E7290");
teamIT.addComputer("Lenovo IdeaPad gaming 3 15IAH7");
teamIT.listComputers();
console.log(teamIT.getNewComputer);
console.log("team IT", teamIT);
console.log("=========================");
// console.log("latest computer", teamIT.newComputer); //Error in typescript, this property is private
console.log("latest computer (getter): ", teamIT.getNewComputer); //getter
teamIT.setNewComputer = "Dell Desktop for editor";
console.log("latest computer (getter): ", teamIT.getNewComputer); //getter
console.log("=========================");

//==============================ABSTRACT CLASSES===============================
console.log("abstract classes");
teamIT.describe();
