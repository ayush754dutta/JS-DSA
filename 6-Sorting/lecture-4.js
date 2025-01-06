"use strict";
 
// quick sort:


function quickSort(arr,low,high){
    if(low<high){
        const pivotIndex = partition(arr, low, high);

        // for right subarray:
        quickSort(arr,pivotIndex+1,high);
        // for left subarray:
        quickSort(arr,low,pivotIndex-1);
    }
}

function partition(arr, low, high){
    const pivot = arr[high];
    let i = low - 1;

    for(let j = low; j<high;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i], arr[j]] = [arr[j],arr[i]];
        }
    }
    
    [arr[i+1],arr[high]] = [arr[high], arr[i+1]];
    return i+1;
}


// example array:
const arr = [10, 7, 8, 9, 1, 5];
let low = 0;
let high = arr.length - 1;

quickSort(arr,low,high);
console.log('Sorted Array: ', arr);


// function quickSort(array, low, high) {
//     if (low < high) {
//         // Partition the array and get the pivot index
//         const pivotIndex = partition(array, low, high);
        
//         // Recursively apply the same logic to the left and right sub-arrays
//         quickSort(array, low, pivotIndex - 1);   // Before pivot
//         quickSort(array, pivotIndex + 1, high);  // After pivot
//     }
// }

// function partition(array, low, high) {
//     const pivot = array[high];   // Choose the last element as pivot
//     let i = low - 1;
    
//     for (let j = low; j < high; j++) {
//         if (array[j] < pivot) {
//             i++;
//             [array[i], array[j]] = [array[j], array[i]];  // Swap elements
//         }
//     }
    
//     [array[i + 1], array[high]] = [array[high], array[i + 1]];  // Swap elements
//     return i + 1;
// }

// // Example usage
// const array = [10, 7, 8, 9, 1, 5];
// const low = 0;
// const high = array.length - 1;

// quickSort(array, low, high);
// console.log("Sorted array:", array);

