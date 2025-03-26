"use strict";

console.log("Binary Search Tree");

// creating a node for BST:

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 1. How to insert a Node in a BST:
  insert(value) {
    let newNode = new Node(value);

    // 1. if no root.

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      // if there is root.
      let current = this.root;

      while (true) {
        if (value === current.value) {
          console.log("duplicate");
          return;
        } else if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  // 2. Finding a node in JS:

  find(targetValue) {
    if (!this.root) {
      console.log("Tree is empty.");
      return false;
    }

    let current = this.root;
    let found = false; // found var is a result variable.

    while (current && !found) {
      if (targetValue < current.value) {
        current = current.left;
      } else if (targetValue > current.value) {
        current = current.right;
      } else {
        found = true;
        console.log(`${targetValue} is found`);
        return current;
      }
    }
    if (!found) {
      console.log("target not found");
      return undefined;
    }

    return current;
  }
}

const tree = new BinarySearchTree();

// tree.root = new Node(10);

// tree.root.right = new Node(15);
// tree.root.left = new Node(6);

console.log(tree);

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(131);
tree.insert(10);

console.log(tree.find(13));
console.log(tree.find(131));
console.log(tree.find(1345));
