class User {
  name: string;
  private email: string;
  protected age: number

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User Created: ' + this.name);
  }

  register() {
    console.log(this.name + ' in now registered');
  }
  payInvoice() {
    console.log(this.name + ' payed invoice.')
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
    super.payInvoice();
  }
}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 34);
mike.payInvoice();