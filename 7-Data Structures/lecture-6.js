"use strict";

// Binary Heaps: They are another category of trees.

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const el = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.values[parentIndex];

      if (el <= parentElement) break;

      this.values[parentIndex] = el;
      this.values[index] = parentElement;
      index = parentIndex;
    }
  }

  // extract max:

  extractMax() {
    const max = this.values[0];
    if (this.values.length > 0) {
      const endElement = this.values.pop();
      this.values[0] = endElement;
    }

    // sink down:

    this.sinkDown();
    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftchildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftchildIndex < length) {
        leftChild = this.values[leftchildIndex];

        if (leftChild > element) {
          swap = leftchildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

/*
1. INSERT PSEUDOCODE
Push the value into the values property on the heap

Bubble Up:

Create a variable called index which is the length of the values property - 1

Create a variable called parentIndex which is the floor of (index-1)/2

Keep looping as long as the values element at the parentIndex is less than the values element at the child index

○ Swap the value of the values element at the parentIndex with the value of the element property at the child index

○ Set the index to be the parentIndex, and start over!

Question:
[41,39,33,18,27,12,55]
*/

const binaryHeap = new MaxBinaryHeap();

binaryHeap.insert(41);
binaryHeap.insert(39);
binaryHeap.insert(33);
binaryHeap.insert(18);
binaryHeap.insert(27);
binaryHeap.insert(12);
binaryHeap.insert(55);

// binaryHeap.insert(55);
// console.log(binaryHeap);

// binaryHeap.insert(199);
// console.log(binaryHeap);

// binaryHeap.insert(1);
// console.log(binaryHeap);

/*
2. REMOVING
(also called extractMax)

Swap the first value in the values property with the last one

Pop from the values property, so you can return the value at the end.

Have the new root "sink down" to the correct spot...

Your parent index starts at 0 (the root)

Find the index of the left child: 2∗index+1 (make sure its not out of bounds)

Find the index of the right child: 2∗index+2 (make sure its not out of bounds)

If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.

The child index you swapped to now becomes the new parent index.

Keep looping and swapping until neither child is larger than the element.

Return the old root!
*/

console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
