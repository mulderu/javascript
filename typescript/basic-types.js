// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = "blue";
color = 'red';
// ${ extr } expression
var fullName = "Mulder Yu";
var age = 28;
var sentence = "Hello , my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
var sameSentence = "Hello , my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
console.log(sameSentence);
// Array
var list = [1, 2, 3, 4];
// generic type
var sameList = [1, 2, 3, 4];
// Tuple
var x;
x = ["hello", 10]; // OK
//errorX = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error : type error
x[3] = "world"; // OK , typeof x is allow string or number
x[4] = 1; // OK 
// x[5] = true; // Error , type mismatc
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); // start index is 0, Color.Red => 0, Color.Blue => 2
var c = Color.Green;
var otherColor;
(function (otherColor) {
    otherColor[otherColor["Red"] = 1] = "Red";
    otherColor[otherColor["Green"] = 2] = "Green";
    otherColor[otherColor["Blue"] = 3] = "Blue";
})(otherColor || (otherColor = {})); // change start index to 1;
console.log(c, otherColor.Green);
// Any
var notSure = 4;
notSure = "mybe a string instead";
notSure = false;
notSure = 4;
//notSure.ifItExists();
//notSure.toFixed();
var prettySure = 4;
// prettySure.toFixed(); // Error
// void
function warnUser() {
    alert('Warning Message');
}
// void can only assign undefined or null
var unusable = undefined;
// Null and Undefined
// undefind and null actually have their own types named undefined and null respectively
// much link void, they're not exremely useful on their own:
//let u : undefined = 1; // Error
var u = undefined; // Ok
var nn = null; // ok
// Never
// The never type represents the type of values that never occur
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
// Type assertions
// type casting
// type 1 "angle-bracket" syntax:
var someValue = "this is a string";
var strLength = someValue.length;
// type2 "as" syntax
var strLength2 = someValue.length;
