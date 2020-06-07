const fetchedUserData = {
    id: 'u1',
    name: 'Radek',
    job: { title: 'Software Engineer', description: 'JS Development'}
}

/** in case job is undefined that's the way to check in JS */
// console.log(fetchedUserData.job && fetchedUserData.job.title);types/optional-chaining.js

/** TS way */
console.log(fetchedUserData?.job?.title);

