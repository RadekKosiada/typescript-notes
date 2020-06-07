"use strict";
/** Nullish Coalescing */
var userHobby = '';
var storeData = userHobby !== null && userHobby !== void 0 ? userHobby : 'DEFAULT';
console.log(storeData);
