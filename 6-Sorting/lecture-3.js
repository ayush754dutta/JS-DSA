/** @format */

'use strict';

// Merge Sort:

const merge = function (arr1, arr2) {
    let results = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] >= arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
};

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(merge([], [2, 14, 99, 100]));

const mergeSort = function (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

console.log(mergeSort([24, 10, 76, 73]));
