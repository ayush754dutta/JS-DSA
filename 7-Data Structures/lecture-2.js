"use strict";

console.log('Singly Linked List');

// creating a node:

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }


    push(value){
        let newNode = new Node(value);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }

        current.next = newNode;
    }


    pop(){
        if(this.head === null) return; // if the list is empty


        //if the list has only one item
        if(this.head.next === null) {
            this.head = null;
        }


        let current = this.head;
        while(current.next.next !== null){//finding second to last node.
            current = current.next;
        }

        current.next = null; //deleting the last element
    }


    // adding element to the beginning.

    unshift(value){
        let newNode = new Node(value);

        newNode.next = this.head;

        this.head = newNode;
    }

    // delete from beginning

    shift(){
        if(!this.head) return;

        this.head = this.head.next; //store the next element in the beginning.
    }


    // insert at specified position

    insertAt(value, position){
        let newNode = new Node(value);

        if(position === 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let previousNode = null;
        let counter = 0;

        while(counter<position && current.next !== null){
            previousNode = current;
            current = current.next;
            counter++;
        }

        if(current === null && counter !== position){
            console.log('The position is out of bounds');
            return;
        }

        previousNode.next = newNode;
        newNode.next = current;
    }

    // remove element from specified position:

    removeAt(position){
        if(!this.head){
            console.log('list is empty');
            return;
            
        }

        if(position === 0){
            this.head = this.head.next;
            return;
        }

        // positon>0, traverse the list:

        let current = this.head;
        let previousNode = null;
        let counter = 0;

        while(counter<position && current !== null){
            previousNode = current;
            current = current.next;
            counter++;
        }

        if(counter !== position && current === null){
            console.log('out of bounds');
            return;
        }

        previousNode.next = current.next;
    }
}


const list_1 = new SinglyLinkedList();

console.log(list_1);

list_1.push(3);
list_1.push(4);
list_1.push(5);

console.log(list_1);

list_1.push(56);

console.log(list_1);

list_1.pop();

console.log(list_1);

list_1.unshift(55);
list_1.unshift(54);
list_1.unshift(77);

console.log(list_1);

list_1.shift();

console.log(list_1);


list_1.insertAt(15, 3);

list_1.removeAt(4);

console.log(list_1);











