
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


(function () {
  console.log("-----optional properties-----");
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  let mySquare = createSquare({ color: "black" });
  console.log(mySquare)
})();

(function () {
  console.log("----readonly------");
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  let p1: Point = { x: 10, y: 20 };
  //p1.x = 5; // error!

  // ReadonlyArray<T> : immutable
  // Array<T> : mutable
  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
  ///ro[0] = 12; // error!
  //ro.push(5); // error!
  //ro.length = 100; // error!
  //a = ro; // error!
  a = ro as number[]; // okayo

  // readonly vs const
  // Variables use const whereas properties use readonly.

})();

(function () {
  console.log("-----Function Type-----");

  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  let mySearch: SearchFunc;
  mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
  }
  console.log(mySearch("hi Mulder", "hi"));

  let mySearch2: SearchFunc;
  mySearch2 = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
  }
  console.log(mySearch2("hi Mulder", "hi"));


})();

(function () {
  console.log("-----Indexable Types-----");

  interface StringArray {
    [index: number]: string;
  }

  let myArray: StringArray;
  myArray = ["Bob", "Fred"];

  let myStr: string = myArray[0];
  console.log(myStr)

})();

(function () {
  console.log("----readonly------");
  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  let myArray: ReadonlyStringArray = ["Alice", "Bob"];
  //myArray[2] = "Mallory"; // error!


})();

(function () {
  console.log("-----class-----");

  interface ClockInterface {
    currentTime: Date;
  }

  class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
  }

  interface ClockInterface2 {
    currentTime: Date;
    setTime(d: Date);
  }

  class Clock2 implements ClockInterface2 {
    currentTime: Date;
    setTime(d: Date) {
      this.currentTime = d;
    }
    constructor(h: number, m: number) { }
  }



})();

(function () {
  console.log("-----interface extending classes-----");

  class Control {
    private state: any;
  }

  interface SelectableControl extends Control {
    select(): void;
  }

  class Button extends Control implements SelectableControl {
    select() { }
  }

  class TextBox extends Control {

  }

  // Error: Property 'state' is missing in type 'Image'.
  // class Image implements SelectableControl {
  //   select() { }
  // }

  class Location {

  }


})();