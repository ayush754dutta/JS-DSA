/** @format */

'use strict';

// Analyzing the performance of objects and arrays:

// 1. objects:

const instructor = {
    firstName: 'Colt',
    isInstrutor: true,
    favNums: [1, 2, 3, 4, 5, 6],
};

console.log(instructor);
console.log(Object.entries(instructor)); //o(n)
console.log(Object.keys(instructor)); //o(n)
console.log(Object.values(instructor)); //o(n)
console.log(instructor.hasOwnProperty('favNums')); //o(1)

// 2. Arrays: notes
