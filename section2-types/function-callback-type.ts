//========================Function return type=================================
//return type of number
function add(n1: number, n2: number) {
  return n1 + n2;
}

//return type of void
//void means nothing to return. The function doesn't have return value
function printResult(numb: number): void {
  console.log(numb);
}

printResult(100);
console.log(printResult(200));

//=======================Function type=========================================
// let combinevalues: Function;
let combinevalues: (n1: number, n2: number) => number;
//combineValues is a function which has 2 parameter with type number, and return a number
combinevalues = add;

console.log(combinevalues(8, 8));

//=======================Function Type and Callback===========================
function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  console.log(cb(result));
}

addAndHandle(10, 20, (a) => {
  console.log("handle cb: ", a);
  return 1250;
});
