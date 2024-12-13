/** @format */

'use strict';

// Selection Sort:

const selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        var lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
            console.log(`i: ${i}, j: ${j}, lowest: ${lowest}`);
        }
        if (i !== lowest) {
            var temp = arr[lowest];
            arr[lowest] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
};

console.log(selectionSort([34, 22, 10, 19, 17]));

// Insertion Sort:

const insertionSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
            console.log(`i: ${i}, j: ${j}, currentValue: ${currentValue}`);
        }
        arr[j + 1] = currentValue;
    }
    return arr;
};

console.log(insertionSort([2, 1, 9, 76, 4]));
