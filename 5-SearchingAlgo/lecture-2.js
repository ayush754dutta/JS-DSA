/** @format */

'use strict';

// Binary Search for strings:

const naiveSearch = function (long, short) {
    var count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (long[i + j] !== short[j]) break;
            if (j === short.length - 1) return ++count;
        }
    }
};

console.log(naiveSearch('lorie loled', 'lol'));
