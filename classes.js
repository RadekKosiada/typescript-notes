var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + ' in now registered');
    };
    return User;
}());
var john = new User('John Doe', 'joe@mail.com', 34);
// console.log(john.age); //now will log error as age is a private property
john.register();
