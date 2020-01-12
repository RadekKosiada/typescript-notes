interface UserInterface {
  name: string;
  email: string;
  age: number;
  register: () => string;
  payInvoice: () => string;
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User Created: ' + this.name);
  }

  register() {
    console.log(this.name + ' in now registered');
    return this.name + ' in now registered';
  }
  payInvoice() {
    console.log(this.name + ' payed invoice.');
    return this.name + ' payed invoice.';
  }
}

let john = new User('John Doe', 'joe@mail.com', 34);

// console.log(john.age); //now will log error as age is a private property

john.register();

class Member extends User{
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    return super.payInvoice();
  }
}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 34);
mike.payInvoice();



///Another example!

interface VehicleInterface {
  name: string;
  speed: number;
  working(): void;
}

class Vehicle implements VehicleInterface {
  public name: string;
  public speed: number;

  //special method that runs when extend class with a new object;
  constructor(name: string, speed: number) {
    //this refers to class!
    this.name = name;
    this.speed = speed;
    
    console.log("Vehicle: ", this.name)
  }

   public working() {
    console.log(this.name + " is working.")
  }
}

class Car extends Vehicle {
  wheels: number;

  constructor(wheels: number, name: string, speed: number ) {
    //super has only two arguments from 'parent' class
    super(name, speed);
    this.wheels = wheels;
  } 

  needsFatTires() {
    console.log(this.name + " needs fat tires")
  } 
}

let audi = new Car(4, "Audi", 34);
console.log(audi.name);

let bike = new Vehicle("Rower", 3)
bike.working();