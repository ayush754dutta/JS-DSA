/** @format */

'use strict';

// Multi pointer pattern:

// 1. Time C - O(n^2):

const sumArr = function (arr) {
    // const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                // newArr.push([arr[i], arr[j]]);
                // console.log([arr[i], arr[j]]);
                return [arr[i], arr[j]];
            }
        }
    }
    console.log(newArr);
};

console.log(sumArr([-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]));

// 2. refactor code- Time C O(n), space C o(1).

const sumZero = function (arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum > 0) {
            end--;
        } else if (sum < 0) {
            start++;
        } else {
            return [arr[start], arr[end]];
        }
    }
};

console.log(sumZero([-6, -4, -2, -1, 0, 1, 2, 3, 5]));

// count unique values using multi pointer pattern:

/*
[1,1,1,1,2] // 2 unique values
[1,5,0,2,7,2] // 5 -'-

*/

const countUniqueValues = function (arr) {
    if (arr.length === 0) {
        return 0;
    }

    let counter = 1; // starting element is always unique.
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            counter++;
            i = j;
        }
        j++;
    }
    return counter;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1, 3, 3, 6, 6, 0, 4, 45]));

// aliter:

const countUniqueVal = function (arr) {
    if (arr.length === 0) {
        return 0;
    }
    let counter = 1;
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            counter++;
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    return counter;
};

console.log(countUniqueVal([1, 1, 2, 2, 3, 4, 5, 5, 5, 6]));
