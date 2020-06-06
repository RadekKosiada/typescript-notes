#### Objects 
* the things you work with in code;
* instances of classes (based on the classes);
* class based creation is an alternative to using object literals;

#### Classes
* blueprints for objects; 
* define how objects look like, which properties an methods the have;
* classes make creation of multiple, similar objects much easier;

##### Abstract classes
* Abstract classes are base classes from which other classes may be derived. They may NOT be instantiated directly, but have to be extended.

###### Modifiers
* 'public' default one;
* 'private' make a property accessible only within the class;
* 'protected' cannot be changed from outside of the class, but can be 'rented'/accessed from its child class;

###### Inheritance 
* can only inherit from one class;
* class that inherits automatically gets all the same that base class;
* with 'constructor' we can create additional, uniuqe parts of the new class;
* 'super' calls the constructor of the base class!
* you can override properties from base class;
* child class does NOT inherit private properties from its parent;

###### Getter
* accessor property (unlike data property);
* they are essentially functions that execute on getting and setting a value, but look like regular properties to an external code. i.e. check the classes.ts code;
* has to return something;

###### Static methods & property

###### Singleton
* guarantees that we always have only(!) one instance of a certain class;
* requires setting 'constructor' to 'private' and using static methods on the class;

#### Interface
* describes the structure of an object;
* 'interface' keyword is only in Typescript;
* used as a custom type;
* sometimes could be exchanged with a custom type; there are some differences:
    - 'I' could be described only to define structure of an object;
    - 'I' makes clearer that we mean to describe structure of an object;
    - 'I' can be implemented within a class;
* can be implemented in a class together with other Interfaces (unlike Inheritance; class can inherit from only one class);
