/* Enum is a custom type; behind the scene all elements get a number */
// by default they will be numerated from 0 like an array
var Origin;
(function (Origin) {
    Origin[Origin["AFRICA"] = 0] = "AFRICA";
    Origin[Origin["EUROPE"] = 1] = "EUROPE";
    Origin[Origin["ASIA"] = 2] = "ASIA";
})(Origin || (Origin = {}));
// but numeration can be customized 
var Leaves;
(function (Leaves) {
    Leaves["BIG"] = "hand-like";
    Leaves[Leaves["AVERAGE"] = 23] = "AVERAGE";
    Leaves[Leaves["SMALL"] = 45] = "SMALL";
})(Leaves || (Leaves = {}));
var plant = {
    name: 'Monstera',
    age: 2,
    conditions: ['moderate water', 'no direct light'],
    origin: Origin.AFRICA,
    leaves: Leaves.BIG
};
console.log(plant.leaves);
