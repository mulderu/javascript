
// class ES6 expression
// like java
// common usage
class Person {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error

// Special keywords
// "readonly" : Readonly properties must be initialized at their declaration or in the constructor.
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.

// - parameter properties : same as above class
// class Octopus {
//   readonly numberOfLegs: number = 8;
//   constructor(readonly name: string) {
//   }
// }

// Accessors : supprts getters/setters
(function () {
  console.log('-general-')
  // general example
  class Employee {
    fullName: string;
  }

  let employee = new Employee();
  employee.fullName = "Bob Smith";
  if (employee.fullName) {
    console.log(employee.fullName);
  }
})();

(function () {
  console.log('-accessor-')
  // accessor example
  let passcode = "secret passcode";

  class Employee {
    private _fullName: string;

    get fullName(): string {
      return this._fullName;
    }

    set fullName(newName: string) {
      if (passcode && passcode == "secret passcode") {
        this._fullName = newName;
      }
      else {
        console.log("Error: Unauthorized update of employee!");
      }
    }
  }

  let employee = new Employee();
  employee.fullName = "Bob Smith";
  if (employee.fullName) {
    console.log(employee.fullName);
  }

})();

// static  : like java      
(function () {
  console.log('-static-')
  // static example
  class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
      let xDist = (point.x - Grid.origin.x);
      let yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
  }

  let grid1 = new Grid(1.0);  // 1x scale
  let grid2 = new Grid(5.0);  // 5x scale

  console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
  console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

})();

// abstract : like java
(function () {
  console.log('-abstract-')
  abstract class Animal {
    abstract makeSound(): void;
    move(): void {
      console.log("roaming the earth...");
    }
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log("mong mong")
    }
  }
  let dog = new Dog();
  dog.makeSound();
  dog.move();

})();


(function () {
  console.log('-abstract class-')
  abstract class Department {
    constructor(public name: string) {
    }

    printName(): void {
      console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
  }

  class AccountingDepartment extends Department {
    constructor() {
      super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting(): void {
      console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
      console.log("Generating accounting reports...");
    }
  }

  let department: Department; // ok to create a reference to an abstract type
  //department = new Department(); // error: cannot create an instance of an abstract class
  department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
  department.printName();
  department.printMeeting();
  //department.generateReports(); // error: method doesn't exist on declared abstract type

})();


(function () {
  console.log('-class and interface -')

  class Point {
    x: number;
    y: number;
  }

  interface Point3d extends Point {
    z: number;
  }

  let point3d: Point3d = { x: 1, y: 2, z: 3 };

  console.log(point3d)

})();

