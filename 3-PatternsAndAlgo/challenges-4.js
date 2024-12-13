/** @format */

'use strict';

const sameFrequency = function (num1, num2) {
    if (num1 < 0 || num2 < 0) return false;

    const freqC1 = {};
    const freqC2 = {};

    num1 = String(num1).split('');
    num2 = String(num2).split('');
    console.log(num1, num2);

    for (let i = 0; i < num1.length; i++) {
        freqC1[num1[i]] = (freqC1[num1[i]] || 0) + 1;
    }

    for (let i = 0; i < num1.length; i++) {
        freqC2[num2[i]] = (freqC2[num2[i]] || 0) + 1;
    }
    console.log(freqC1, freqC2);

    for (let key in freqC1) {
        if (!(key in freqC2)) {
            return false;
        }

        if (freqC1[key] !== freqC2[key]) {
            return false;
        }
    }
    return true;
};

console.log(sameFrequency(166, 645));
console.log(sameFrequency(564, 645));
console.log(sameFrequency(182, 281));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
