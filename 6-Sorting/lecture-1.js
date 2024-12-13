/** @format */

'use strict';

// Bubble Sort:

const bubbleSort = function (arr) {
    if (arr.length <= 1) return arr;

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                // let temp = arr[j];
                // arr[j] = arr[i];
                // arr[i] = temp;

                swap(arr, j, i);
            }
        }
    }
    return arr;
};

const arr = [78, -11, 6, 15, 97, 0, 33, 45, 153, -74];

console.log(bubbleSort(arr));
console.log(bubbleSort([45, -11, 96, 465, 984, -13, 16, 6]));

// aliter:

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

console.log(swap(arr, 0, 1));

// aliter:

const bubbleSort2 = function (arr) {
    var noSwap;
    for (let i = arr.length; i >= 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
};

console.log('NEW BUBBLE SORT');

console.log(bubbleSort2([45, -11, 96, 465, 984, -13, 16, 6]));
