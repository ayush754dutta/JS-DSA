"use strict";

// Priority Queue:

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(element, priority) {
    let newNode = new Node(element, priority);
    let contain = false;

    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i].priority > newNode.priority) {
        this.values.splice(i, 0, newNode);
        contain = true;
        break;
      }
    }

    // if element has lowest priority, it is added at end of queue

    if (!contain) {
      this.values.push(newNode);
    }
  }

  // remove and return highest priority element
  dequeue() {
    return this.isEmpty() ? null : this.values.shift().val;
  }

  // view highest priority element:
  peek() {
    return this.isEmpty() ? null : this.values[0].val;
  }

  // method to check if queue is empty
  isEmpty() {
    return this.values.length === 0;
  }

  changePriority(value, newPriority) {
    const index = this.items.findIndex((item) => item.value === value);
    if (index === -1) return false; // Value not found
    // Remove the element and re-enqueue with new priority
    const [element] = this.items.splice(index, 1);
    this.insert(element.value, newPriority);
    return true;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.insert(1, 1);
priorityQueue.insert(6, 6);
priorityQueue.insert(3, 3);
priorityQueue.insert(5, 5);
priorityQueue.insert(0, 0);
priorityQueue.insert(7, 7);

console.log(priorityQueue);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.peek());
