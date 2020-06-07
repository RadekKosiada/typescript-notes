"use strict";
var _a;
var fetchedUserData = {
    id: 'u1',
    name: 'Radek',
    job: { title: 'Software Engineer', description: 'JS Development' }
};
/** in case job is undefined that's the way to check in JS */
// console.log(fetchedUserData.job && fetchedUserData.job.title);types/optional-chaining.js
/** TS way */
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
