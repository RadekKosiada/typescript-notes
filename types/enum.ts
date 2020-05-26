/* Enum is a custom type; behind the scene all elements get a number */

// by default they will be numerated from 0 like an array
enum Origin { AFRICA, EUROPE, ASIA }

// but numeration can be customized 
enum Leaves {BIG = 'hand-like', AVERAGE = 23, SMALL = 45} 

const plant = {
    name: 'Monstera',
    age: 2,
    conditions: ['moderate water', 'no direct light'],
    origin: Origin.AFRICA,
    leaves: Leaves.BIG
}

console.log(plant.leaves);