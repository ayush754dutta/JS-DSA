/** @format */

'use strict';

// Recursion:

const countDown = function (num) {
    if (num <= 0) return 1;
    console.log(num);

    return countDown(num - 1);
};

countDown(6);

// sum range:

const sumRange = function (num) {
    if (num === 1) return 1;

    return num + sumRange(num - 1);
};

console.log(sumRange(6));

// factorial:

const factorialIterative = function (num) {
    let multiply = 1;
    for (let i = num; i >= 1; i--) {
        multiply *= i;
    }
    console.log(multiply);
};

factorialIterative(6);
factorialIterative(3);
factorialIterative(1);
factorialIterative(0);

// aliter:

const factorialRecursive = function (num) {
    if (num === 1) {
        return 1;
    }

    return num * factorialRecursive(num - 1);
};

// console.log(factorialRecursive(6));
// console.log(factorialRecursive(3));
// console.log(factorialRecursive(1));
console.log(factorialRecursive(0));
console.log(factorialRecursive(6));
