/** @format */

'use strict';

console.log('Counting operations');

// ans1:
const addUpto1 = function (n) {
    return (n * (n + 1)) / 2;
};

console.log(addUpto1(50));
console.log(addUpto1(50000000000000000));

// ans2

const addUpto2 = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
};

console.log(addUpto2(50));
console.log(addUpto2(500000000));

// q2

const countUpAndDown = function (n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }

    for (let j = n; j >= 1; j--) {
        console.log(j);
    }
};

countUpAndDown(10);

// q3

const printAllPairs = function (n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            console.log(`i:${i},j:${j}`);
        }
    }
};

printAllPairs(6); //o(n)

// Space complexity:

const fillArr = function (arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    console.log(newArr);
};

fillArr([1, 2, 3, 4, 5, 6]);
