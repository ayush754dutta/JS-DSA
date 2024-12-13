/** @format */

'use strict';

// Sliding window pattern:

const maxSubArraySum = function (arr, num) {
    if (num > arr.length) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }
        console.log(max, temp);
    }
    console.log(max);
};

maxSubArraySum([1, 3, 2, 4, 0, 9, 1], 3);

// but above is o(n^2).

const maxSubArrSum = function (arr, num) {
    if (num > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    //  loop to calc sum of first num numbers
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // loop to slide the window
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
};

maxSubArrSum([1, 5, 3, 6, 6, 0, 5, 9, 6, 5, 6, 1, 6], 4);
