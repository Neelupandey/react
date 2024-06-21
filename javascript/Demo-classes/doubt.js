//Encapsulation is the concept of bundling data (variables) and methods (functions) that operate on the data into a single unit, typically an object. It also involves restricting access to certain details of an object, which helps to protect the integrity of the object's data.
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return firstName+ ' '+ lastName
    }
}
// Polymorphism
// Polymorphism is the ability of different objects to respond to the same method or property in different ways. It allows methods to be used interchangeably, even if the underlying implementations differ.
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Cat meows');
  }
}
const myDog = new Dog();
const myCat = new Cat();

myDog.speak()

// makeAnimalSpeak(myDog); // Dog barks
// makeAnimalSpeak(myCat); // Cat meows

// Pass by value
//When a function is called by value, it means that the actual value of the argument is passed to the function. Changes made to the parameter inside the function do not affect the original variable.
function sayHello(name){
    name = name.toLowerCase();
    console.log(name)
}
const m = "JoHn";
sayHello(m);
console.log(m)
// pass by reference
//When a function is called by reference, it means that a reference to the actual memory address of the argument is passed to the function. Changes made to the parameter inside the function do affect the original variable.
function add(arr){
    arr.push(3);
    console.log(arr)
}

const a = [1,2];
add(a);
console.log(a)


class Memoized{
    cache = {
        "2":4
    };
    
    square(num){
        if(cache[num]){
            return cache[num]
        }
        const result = num * num;
        cache[num] = result;
        return result;
    }
    get(){
        return data;
    }
}

const obj = new Memoized();
console.log(obj.square(2))// 4
console.log(obj.square(2))


function thirdLargest(arr) {

    // Initialize the three largest elements to the minimum possible value
    let first = 45, second = 23, third = 12;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        third = second;
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] < first) {
        third = second;
        second = arr[i];
      } else if (arr[i] > third && arr[i] < second) {
        third = arr[i];
      }
    }
  
    return third;
  }
  // Example usage
  const arr = [12, 45, 23, 89, 34, 11, 9, 55, 48];
  console.log(thirdLargest(arr)); // Output: 48