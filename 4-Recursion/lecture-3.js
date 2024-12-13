/** @format */

'use strict';

// 1.

const power = function (base, exponent) {
    if (exponent === 0) return 1;
    if (base === 0) return 0;

    return base * power(base, exponent - 1);
};

console.log(power(2, 3));
console.log(power(3, 3));
console.log(power(0, 3));
console.log(power(0, 0));
console.log(power(6, 3));

// 2.

const factorial = function (num) {
    if (num === 0) return 1;

    return num * factorial(num - 1);
};

console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(0));

// 3.

const productOfArray = function (arr) {
    let i = 0;
    if (i > arr.length - 1) return 1;
    return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([6, 5, 4, 3, 2, 1]));
console.log(productOfArray([6, 5, 4]));

// 4.

const recursiveRange = function (num) {
    if (num === 0) return 0;

    return num + recursiveRange(num - 1);
};

console.log(recursiveRange(6));

// 5.

const fib = function (num) {
    if (num === 0) return 0;

    if (num === 1) return 1;

    return fib(num - 1) + fib(num - 2);
};

console.log(fib(5));
console.log(fib(6));
