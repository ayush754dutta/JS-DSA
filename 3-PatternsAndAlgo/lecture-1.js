/** @format */

'use strict';

// problem solving patterns:

// Q.write a fn which returns freq of each char in str.

const charCount = function (str) {
    if (str.length === 0 || typeof str !== 'string') {
        console.log('Invalid input');
    }

    const counterObj = {};

    let i = 0;
    while (i < str.length) {
        if (!counterObj[str[i]]) {
            //aliter if(counterObj[str[i]]>0){repeat the same}
            counterObj[str[i]] = 1;
        } else {
            counterObj[str[i]]++;
        }
        i++;
    }
    console.log(counterObj);
};

charCount('');
charCount('abaijaqoabfff');
charCount(6);

// aliter:

const charCount2 = function (str) {
    if (str.length === 0 || typeof str !== 'string') {
        console.log('Invalid input');
    }

    const counterObj = {};

    let i = 0;
    while (i < str.length) {
        const char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (counterObj[char] > 0) {
                counterObj[char]++;
            } else {
                counterObj[char] = 1;
            }
        }
        i++;
    }
    console.log(counterObj);
};

charCount2('abcdz06aef');

// aliter:

const charCount3 = function (str) {
    if (str.length === 0 || typeof str !== 'string') {
        console.log('Invalid input');
    }

    const counterObj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            counterObj[char] = ++counterObj[char] || 1;
        }
    }
    console.log(counterObj);
};

charCount3('AabBcr6WwFfF');

// VVIP Ques:

const same = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
        console.log(arr2);
    }
    return true;
};

console.log(same([1, 3, 2], [9, 1, 4]));

// but above is o(n^2).

const sameEff = function (a1, a2) {
    if (a1.length !== a2.length) {
        return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let el of a1) {
        frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1;
    }

    for (let el of a2) {
        frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;
        }
    }
    return true;
};

console.log(sameEff([3, 1, 2], [1, 4, 9]));
console.log(sameEff([3, 1, 2, 8, 3, 6, 6], [1, 4, 9, 36, 9, 64, 36]));

const anagramSame = function (str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) {
        return false;
    }

    const freqCounter1 = {};
    const freqCounter2 = {};

    for (let char of str1) {
        freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }
    console.log(freqCounter1);

    for (let char of str2) {
        freqCounter2[char] = (freqCounter2[char] || 0) + 1;
    }
    console.log(freqCounter2);

    for (let key in freqCounter1) {
        if (!(key in freqCounter2)) return false;

        if (freqCounter1[key] !== freqCounter2[key]) return false;
    }

    return true;
};

console.log(anagramSame('agfecq', 'qgafec'));
console.log(anagramSame('agfefcfqf', 'qgafecfff'));
console.log(anagramSame('agfefEFFcfqf', 'qgEFFafecfff'));
