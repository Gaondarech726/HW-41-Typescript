"use strict";
// TASK 1
// № 1
let age = 50;
let nameF = "Max";
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
console.log(age);
console.log(nameF);
console.log(toggle);
console.log(empty);
console.log(notInitialize);
console.log(callback(1));
// № 2
let anything = -20;
anything = "Text";
anything = {};
console.log(anything);
// № 3
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
console.log(some);
// № 5
let person = ["Max", 21];
console.log(person);
// № 6
var TYPE;
(function (TYPE) {
    TYPE[TYPE["LOADING"] = 0] = "LOADING";
    TYPE[TYPE["READY"] = 1] = "READY";
})(TYPE || (TYPE = {}));
// № 7
let union;
union = "Text";
union = 10;
console.log(union);
// № 8
let onlyOne;
onlyOne = "enable";
console.log(onlyOne);
// № 9
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
console.log(showMessage("Test"));
console.log(calc(1, 2));
console.log(customError());
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
console.log(page1);
console.log(page2);
