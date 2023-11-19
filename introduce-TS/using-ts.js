console.log("hello typescirpt");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var addBtn = document.getElementById("addBtn");
var addNumber = function (num1, num2) {
    return num1 + num2;
};
addBtn.onclick = function () {
    console.log("".concat(num1.value, " + ").concat(num2.value, " = ").concat(addNumber(+num1.value, +num2.value)));
};
