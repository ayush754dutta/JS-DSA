"use strict";

// Data Structures:

// OOP:

class Car{
    constructor(name, brand, price){
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    //methods:

    start(){
        console.log(`The car ${this.name}, with brand ${this.brand} has a price of ${this.price} INR`);
    }
}

const maruti = new Car("Ayush Maruti", "Maruti Suzuki", 300000);

console.log(maruti);
console.log(maruti.brand);
console.log(maruti.name);
console.log(maruti.price);

maruti.start();

// inheritance:

class Vehicle extends Car{
    constructor(make, year, name, brand, price, fuelType){
        super(name,brand,price);
        this.fuelType = fuelType;
        this.year = year;
        this.make = make;
    }

    refuel(){
        console.log(`${this.name} is fueled with ${this.fuelType} in the year ${this.year}, made by ${this.make}`); 
    }
}

const meriVehicle = new Vehicle("India",2025,'ayush ki maruti','Maruti Suzuki',300000,"gasoline");
console.log('------');

meriVehicle.refuel();

// encapsulation:

class Person {

    #salary;

    constructor(name, age, salary){
        this.name = name;
        this._age = age;
        this.#salary = salary;
    }

    get age(){
        return this._age;
    }

    set age(ageValue){
        if(ageValue<0){
            console.log('This is an invalid input'); 
        }else{
            this._age = ageValue;
        }
    }

    
    get getSalary(){
        return this.#salary;
    }

    set getSalary(value){
        this.#salary = value;
    }
        
}

const ayush = new Person("Ayush Dutta", 26, 5000000);

console.log(ayush.age);

console.log(ayush.salary);


// polymorphism:

class Animal{
    makeSound(){
        console.log('Animal makes a sound');
        
    }
}

class Dog extends Animal{
    makeSound(){
        console.log('Dog barks');
        
    }
}

class Cat extends Animal{
    makeSound(){
        console.log('Cat meows');
        
    }
}


const dog = new Dog();
dog.makeSound();

const cat = new Cat();
cat.makeSound();

console.log('-------------');

const allAnimals = [new Animal(), cat, dog];

allAnimals.forEach(el=>el.makeSound());




