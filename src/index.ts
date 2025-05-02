// TASK 1

// № 1

let age: number = 50;
let nameF: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: (a: number) => number = (a) => {
  return 100 + a;
};

console.log(age);
console.log(nameF);
console.log(toggle);
console.log(empty);
console.log(notInitialize);
console.log(callback(1));

// № 2

let anything: any = -20;
anything = "Text";
anything = {};

console.log(anything);

// № 3

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

console.log(some);

// № 5

let person: [string, number] = ["Max", 21];

console.log(person);

// № 6

enum TYPE {
  LOADING,
  READY,
}

// № 7

let union: string | number;

union = "Text";
union = 10;

console.log(union);

// № 8

let onlyOne: "enable" | "disable";
onlyOne = "enable";

console.log(onlyOne);

// № 9

function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

console.log(showMessage("Test"));
console.log(calc(1, 2));
console.log(customError);

// № 10

type defaultPage = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {};
};

const page1: defaultPage = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: defaultPage = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

console.log(page1);
console.log(page2);
