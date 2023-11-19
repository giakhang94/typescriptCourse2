// const person: {
//   name: string;
//   age: number;
// } = {
//=======================TUPLES TYPES and OBJECT TYPE=====================
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Khang",
//   age: 29,
//   hobbies: ["sports", "cooking"],
//   role: [12, "author"],
// };
//====================================ENUMS TYPE===========================
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  TAO = 1,
  ADMIN = "ahihi",
  READ_ONLY = 1,
  AUTHOR = "ahihi",
  TEST_INDEX = 0,
  Test_index2,
  TAO2 = "Phuong",
}

const person = {
  name: "Khang",
  age: 29,
  hobbies: ["photographing", "cooking"],
  role: Role.AUTHOR,
};
if (person.role === Role.AUTHOR) {
  console.log("role author: ", Role.AUTHOR);
}

let favoriteActivities: string[];
favoriteActivities = ["sports"];
// person.role.push("admin"); //push is allowed in tuples
//person.role[2] = anythin // this will throw an error. can add more index in tuples, except push method
// console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby);
  //   console.log(hooby.map()) !!! Error
}
