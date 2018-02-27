var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class ES6 expression
// like java
// common usage
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
// Special keywords
// "readonly" : Readonly properties must be initialized at their declaration or in the constructor.
var Octopus = (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.
// - parameter properties : same as above class
// class Octopus {
//   readonly numberOfLegs: number = 8;
//   constructor(readonly name: string) {
//   }
// }
// Accessors : supprts getters/setters
(function () {
    console.log('-general-');
    // general example
    var Employee = (function () {
        function Employee() {
        }
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
})();
(function () {
    console.log('-accessor-');
    // accessor example
    var passcode = "secret passcode";
    var Employee = (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode && passcode == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
})();
// static  : like java      
(function () {
    console.log('-static-');
    // static example
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid(1.0); // 1x scale
    var grid2 = new Grid(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
})();
// abstract : like java
(function () {
    console.log('-abstract-');
    var Animal = (function () {
        function Animal() {
        }
        Animal.prototype.move = function () {
            console.log("roaming the earth...");
        };
        return Animal;
    }());
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.makeSound = function () {
            console.log("mong mong");
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.makeSound();
    dog.move();
})();
(function () {
    console.log('-abstract class-');
    var Department = (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log("Department name: " + this.name);
        };
        return Department;
    }());
    var AccountingDepartment = (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            return _super.call(this, "Accounting and Auditing") || this;
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log("The Accounting Department meets each Monday at 10am.");
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log("Generating accounting reports...");
        };
        return AccountingDepartment;
    }(Department));
    var department; // ok to create a reference to an abstract type
    //department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    //department.generateReports(); // error: method doesn't exist on declared abstract type
})();
(function () {
    console.log('-class and interface -');
    var Point = (function () {
        function Point() {
        }
        return Point;
    }());
    var point3d = { x: 1, y: 2, z: 3 };
    console.log(point3d);
})();
