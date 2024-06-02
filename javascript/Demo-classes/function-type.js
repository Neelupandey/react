// // What are they? Reusable blocks of code that perform specific tasks.
// // Why use them?

// // - Organize code for better readability and maintainability.
// // - Avoid repetition by calling a function multiple times.
// // - Encapsulate logic for modularity and reusability.

// // Types
// // 1. Regular Function

// function funName(parameters){
//     // codeblock
//     // return statement
// }

// function greet(name){
//     console.log('Hello ', name)
// }
// greet('Rohit')
// // 2. Arrow function/ short hand function
// const arrowFunction = (parameters) => {
//   // code to be executed
//   // return
// };

// const square = (x) => x * x

// console.log(square(5)); // Outputs: 25

// // Anonymous Functions
// //  Functions without a name, often used as arguments to other functions or assigned to variables.
// const greetSomeone = function (name){
//     console.log('Hello ', name)
// }
// greetSomeone()
// // Constructor Functions
// // Used to create an object
// function Person(name, age) {
//   this.fullName = name;
//   this.myAge = age;
// }
// const john = new Person("John", 25);
// const second = new Person("Rohit", 50); 

// console.log(john)


// // Methods
// // Its function in an object

// const user = {
//     name: "Rohit",
//     age: 96,
//     printName: function (){
//         console.log(user.name)
//     },
//     printNameWithArrow: () => {
//         console.log(this.name)
//     }
// }
// user.printName()
// user.printNameWithArrow() // undefined => Arrow function don't have its own this.
// // Function Expression
// const anonymousFunction = function(x, y) {
//   return x + y;
// };
// // Calling the anonymous function
// const result = anonymousFunction(3, 7);
// // Output: 10



// //Closure

// function outerFunction(){
//   let a = 100;
//   console.log(a);
//   function innerFunction(){
//     console.log("Inner Function");
//   }
//   innerFunction();
// }
// outerFunction();

// function outerFunction(){
//   let a = 100;
//   console.log(a);
//   return function innerFunction(){
//     console.log("Inner Function",a);
//   }
// }
// const z = outerFunction();
// z()

// function createCounter(){
//   let count = 0;
//   function increment(){
//     count++;
//     console.log(count);

//   }
//   return increment;
// }
// let incrementFunction = createCounter();
// incrementFunction();
// incrementFunction();
// incrementFunction();
// incrementFunction();
// incrementFunction();


// Closure
// Its an inner function that is having access to outer function variables.

function outerFunction(){
  let a = 100;
  console.log(a)
  function innerFunction(){
      console.log("Inner Function", a)
  }
  innerFunction();
}
// outerFunction()

function outerFunction(){
  let a = 100;
  console.log(a)
  return function innerFunction(){
      console.log("Inner Function", a)
  }
}
const  z = outerFunction()
z()
// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     return increment;
// }

// let incrementFunction = createCounter();
// incrementFunction();
// incrementFunction();
// incrementFunction();
// incrementFunction();
// incrementFunction();
// function createCounter(){
//   let count = 0;
//   function increment(){
//       count++;
//       console.log(count);
//   }
//   function decrement(){
//       count--;
//       console.log(count);
//   }
//   return {increment, decrement};
// }

// let res = createCounter();
// console.log(res)
// res.increment()
// res.increment()
// res.increment()

// res.decrement()
// res.decrement()
// res.decrement()

// function outerFunction() {
//   let outerVariable = 'I am from the outer scope';

//   function innerFunction() {
//       console.log(outerVariable);
//   }

//   return innerFunction;
// }

// const closureFunction = outerFunction();
// closureFunction();


// Strings
// Sequence of character/ aphabets, numbers wrapped in quotes

//Create
// 1. Using single quote
// 2. Using double quote
// 3. Template Literal

const a = 'Sharma';
const b = "Rohit";

const num = 100;
const c = `My name is ${a} and age is: ${num} `;

console.log(c)


// console.log(c)

// length;
console.log(a.length) // 6

// indexOf - First found index
console.log(a.indexOf('a')) // 2
console.log(a.indexOf('rm')) // 3
console.log(a.indexOf('rmt')) // -1

// lastIndexOf
console.log(a.lastIndexOf('a')) // 5
