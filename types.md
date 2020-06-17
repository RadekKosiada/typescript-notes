TS uses static types => set (once for all) in development; Supported during development; Not after compiling;

Unlike JS that uses 'dynamic types';

**TYPES:**

+ **numbers** - all numbers, no differentiation between integers or floats; 1, 5.3, -10;

+ **string** - all text values; 'Hi', "Hi", `Hi`;

+ **boolean** - only true & false; no 'truthy' or 'falsy' value;

+ **objects**  
    - any JS object; can be defined as type 'object' just by assigning object to a const; but more specific objects can be possible;
    - allow using **discriminated unions**;


+ **array** - any JS array; type can be 
    - flexible;
    - strict;

+ **tuple** - array with fixed number of elements;

+ **enum** - enumerated list, custom type, often uppercase, but lower case is also correct;

+ **any**;

+ **union** - defined with '|';

+ **literal types** - variables, where not only type, but also the very value is defined!;

+ **custom type** - can have any name, but no key words used in JS i.e. Date...

+ **void** - for functions that have no return statement; for example if we only log things in the console;

+ **undefined** - is a value itself; so doesn't equal void;

+ **Function** 
    - type to declare on functions, to make sure they are not defined; 
    - '...' spread operator when don't know how many arguments do we pass;

+ **unknown** - cannot be assigned to string;
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type
Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing. 

+ **any** - to define type of variables that we do not know when we are writing an application;

+ **never**; 
    - for a function that always crashes script or a part of it and never returns anything, even not an 'undefined';
    - can be also void; but 'never' is better;


+ **null**; 

+ **generics**;

+ **intersection types**
    - combine multiple types into one;
    - allow to add existing types to get a single type that has all features we need;
    - allow to use **type guards**;

+ **Index types**
    - to be used if
        - we don't know the property name
        - we don't know the propery count
        - we know there will be a property name and it will be a string
        - we also know there will be a value and it will also be a string;
    - we can have fixed/defined properties but their types have to be of the same type as predefined ones;

+ **Generic type**
    + is connected with some other type and is flexible what type it is;
    + **Generic functions**
        + allow/require **Constraints** 
            + added by keyword 'extands' regarding what types generic can be based on;
            + interface can be a Constraint;
            + allows using 'keyof'; 
    
    + **Generic classes**
    
    + **Difference: generic types vs. Union types**
        + Generics: if you want a lock in a certain type;
        + Union: when you want a flexble type; different with every method/function call;

    
