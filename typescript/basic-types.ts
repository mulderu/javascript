// Boolean
let isDone : boolean = false;

// Number
let decimal: number = 6;
let hex : number = 0xf00d;
let binary : number = 0b1010;
let octal : number = 0o744;

// String
let color : string = "blue";
color = 'red';

// ${ extr } expression
let fullName : string = `Mulder Yu`;
let age: number = 28;
let sentence : string = `Hello , my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

let sameSentence : string = "Hello , my name is "+ fullName + ".\n\n" +
 "I'll be " + (age + 1)+ " years old next month.";

 console.log(sentence)
 console.log(sameSentence)

// Array
let list: number[] = [1,2,3,4];
// generic type
let sameList: Array<number> = [1,2,3,4];

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
//errorX = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error : type error

x[3] = "world"; // OK , typeof x is allow string or number
x[4] = 1; // OK 
// x[5] = true; // Error , type mismatc

// Enum
enum Color {Red, Green, Blue} // start index is 0, Color.Red => 0, Color.Blue => 2
let c : Color  = Color.Green;

enum otherColor { Red=1, Green, Blue} // change start index to 1;
console.log(c, otherColor.Green);

// Any
let notSure: any = 4;
notSure = "mybe a string instead";
notSure = false;

notSure = 4;
//notSure.ifItExists();
//notSure.toFixed();
let prettySure: Object = 4;
// prettySure.toFixed(); // Error

// void
function warnUser() : void {
  alert ('Warning Message')
}

// void can only assign undefined or null
let unusable: void = undefined;

// Null and Undefined
// undefind and null actually have their own types named undefined and null respectively
// much link void, they're not exremely useful on their own:
//let u : undefined = 1; // Error
let u : undefined = undefined; // Ok
let nn : null = null; // ok

// Never
// The never type represents the type of values that never occur

// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {
  }
}


// Type assertions
// type casting
// type 1 "angle-bracket" syntax:
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// type2 "as" syntax
let strLength2: number = (someValue as string).length;













