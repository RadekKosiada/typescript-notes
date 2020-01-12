var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + ' in now registered');
        return this.name + ' in now registered';
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' payed invoice.');
        return this.name + ' payed invoice.';
    };
    return User;
}());
var john = new User('John Doe', 'joe@mail.com', 34);
// console.log(john.age); //now will log error as age is a private property
john.register();
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        return _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(1, 'Mike Smith', 'mike@gmail.com', 34);
mike.payInvoice();
var Vehicle = /** @class */ (function () {
    //special method that runs when extend class with a new object;
    function Vehicle(name, speed) {
        //this refers to class!
        this.name = name;
        this.speed = speed;
        console.log("Vehicle: ", this.name);
    }
    Vehicle.prototype.working = function () {
        console.log(this.name + " is working.");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, name, speed) {
        var _this = 
        //super has only two arguments from 'parent' class
        _super.call(this, name, speed) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.needsFatTires = function () {
        console.log(this.name + " needs fat tires");
    };
    return Car;
}(Vehicle));
var audi = new Car(4, "Audi", 34);
console.log(audi.name);
var bike = new Vehicle("Rower", 3);
bike.working();
