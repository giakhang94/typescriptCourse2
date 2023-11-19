type Combinable = number | string;
type ConversionDescriptor = "as-string" | "as-number";

function combine(
  input1: Combinable,
  input2: number | string, //union types
  //   resultConversion: "as-number" | "as-string" //literal types
  resultConversion: ConversionDescriptor
) {
  let result: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineNames = combine("Max", "Anna", "as-string");

console.log(combineNames);
console.log(+combineNames); //NaN (not a number)
