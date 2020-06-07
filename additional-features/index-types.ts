/** Declaring index types */

interface ErrorContainer {
    /** we don't know the property name
     *  we don't know the propery count
     *  we know there will be a property name and it will be a string
     *  we also know there will be a value and it will also be a string 
     */
    [prop: string]: string;
}

const errors: ErrorContainer = {
    email: 'Not a valid email!',
    userName: 'Must start with a capitla character!'
}