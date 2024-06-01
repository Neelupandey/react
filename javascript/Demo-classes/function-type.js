// What are they? Reusable blocks of code that perform specific tasks.
// Why use them?

// - Organize code for better readability and maintainability.
// - Avoid repetition by calling a function multiple times.
// - Encapsulate logic for modularity and reusability.

// Types
// 1. Regular Function

function funName(parameters){
    // codeblock
    // return statement
}

function greet(name){
    console.log('Hello ', name)
}
greet('Rohit')
// 2. Arrow function/ short hand function
const arrowFunction = (parameters) => {
  // code to be executed
  // return
};

const square = (x) => x * x

console.log(square(5)); // Outputs: 25

// Anonymous Functions
//  Functions without a name, often used as arguments to other functions or assigned to variables.
const greetSomeone = function (name){
    console.log('Hello ', name)
}
greetSomeone()
// Constructor Functions
// Used to create an object
function Person(name, age) {
  this.fullName = name;
  this.myAge = age;
}
const john = new Person("John", 25);
const second = new Person("Rohit", 50); 

console.log(john)


// Methods
// Its function in an object

const user = {
    name: "Rohit",
    age: 96,
    printName: function (){
        console.log(user.name)
    },
    printNameWithArrow: () => {
        console.log(this.name)
    }
}
user.printName()
user.printNameWithArrow() // undefined => Arrow function don't have its own this.
// Function Expression
const anonymousFunction = function(x, y) {
  return x + y;
};
// Calling the anonymous function
const result = anonymousFunction(3, 7);
// Output: 10