/** @format */

'use strict';

// Searching Algorithm:

// 1. Linear search:

const linearSearch = function (arr, target) {
    if (arr.length === 0) return -1;

    let i = 0;
    while (i < arr.length) {
        if (arr[i] === target) {
            return i;
        }
        i++;
    }
    return -1;
};

console.log(linearSearch([9, 8, 0, -15, 6, 45, 8], 6));
console.log(linearSearch([9, 8, 0, -15, 6, 45, 8], -100));
console.log(linearSearch([], 5));

// 2. binary search:

const binarySearch = function (arr, target) {
    arr = arr.sort((a, b) => a - b);
    console.log(arr);

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (target > arr[mid]) {
            left = mid + 1;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
};

console.log(binarySearch([45, -3, -11, 45, 6, 3, -7, -8, 132, 55], 6));
console.log(binarySearch([45, -3, -11, 45, 6, 3, -7, 132, 55], 6));
console.log(binarySearch([45, -3, -11, 45, 6, 3, -7, 132, 55], 6000));

// Aliter:
console.log('Alternate');

const binarySearch2 = function (arr, target) {
    arr = arr.sort((a, b) => a - b);
    console.log(arr);

    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (arr[mid] !== target && left <= right) {
        if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2);
    }

    return arr[mid] === target ? mid : -1;
};

console.log(binarySearch2([45, -3, -11, 45, 6, 3, -7, -8, 132, 55], 6));
console.log(binarySearch2([45, -3, -11, 45, 6, 3, -7, 132, 55], 6));
console.log(binarySearch2([45, -3, -11, 45, 6, 3, -7, 132, 55], 6000));
