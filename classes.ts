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
}

let john = new User('John Doe', 'joe@mail.com', 34);

// console.log(john.age); //now will log error as age is a private property

john.register();