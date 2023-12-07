//=============================unknown================================
let userInputt: unknown;

userInput = 5;
userInput = "max";
let userName1: any;

// userName = userInput; //error: unknown is not assignable to a string
userInput = ["1", "2"];
// userInput[0] = 1; // error: userInput is unknow

userInput = 1;
userName = userInput;

let userInput22: unknown;
userInput2 = 2;

// console.log(userInput + userInput2); // Lỗi luôn k cho cộng không cho làm gì hết

//==========================="never" type===================================
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result5 = generateError("An error occurred", 500);
console.log(generateError("tao", 200));
