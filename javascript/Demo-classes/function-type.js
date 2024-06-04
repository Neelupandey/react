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

// function outerFunction(){
//   let a = 100;
//   console.log(a)
//   function innerFunction(){
//       console.log("Inner Function", a)
//   }
//   innerFunction();
// }
// // outerFunction()

// function outerFunction(){
//   let a = 100;
//   console.log(a)
//   return function innerFunction(){
//       console.log("Inner Function", a)
//   }
// }
// const  z = outerFunction()
// z()
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

// const a = 'Sharma';
// const b = "Rohit";

// const num = 100;
// const c = `My name is ${a} and age is: ${num} `;

// console.log(c)


// // console.log(c)

// // length;
// console.log(a.length) // 6

// // indexOf - First found index
// console.log(a.indexOf('a')) // 2
// console.log(a.indexOf('rm')) // 3
// console.log(a.indexOf('rmt')) // -1

// // lastIndexOf
// console.log(a.lastIndexOf('a')) // 5



// length
// indexOf()
// lastIndexOf()

// includes() - Returns boolean value
// Checks if a sring includes specified sub string
// const text = "Make Anything"

// console.log(text.includes("Make")); // true
// console.log(text.includes("make")); // false - Case Sensitive

// console.log(text.includes("India")); // false

// // charAt()
// // Returns a character at specified index;
// // Empty string ("") if the index is out of range
// console.log(text.charAt(5)); // A
// console.log(text.charAt(0)); // M
// console.log(text.charAt(100)); // Empty String ""


// const lastCharIndex = text.length - 1
// console.log(text.charAt(lastCharIndex)); // g


// concat - Concatenates two strings
// let text1 = "Rohit";
// let text2 = "Sharma"

// let text3 = text1 + " "+ text2;
// let text4 = text1.concat(text2);
// console.log(text1)
// console.log(text2)
// console.log(text3)
// console.log(text4)

// // endsWith - Check if a string ends with specified substring

// const a1 = "Make Anything";
// console.log(a1.endsWith("g")) //  true
// console.log(a1.endsWith("Anything")) //  true
// console.log(a1.endsWith("anything")) //  false
// console.log(a1.endsWith("some")) //  false


// const str = "Make Anything";
// console.log(str.match("a"));
// console.log(str.match("g"));

// repeat()
// Creates copy of a text

// const str = "Rohit Sharma";

// let result = str.repeat(3)
// console.log(result) // Rohit SharmaRohit SharmaRohit Sharma

// // replace() - Replace the string

// result = str.replace("Rohit", "Hardik");
// console.log(result)  // Hardik Sharma

// let str2 = "Make anything"
// result = str2.replace("a", "Z");
// console.log(result)  

// // replaceAll()

// result = str2.replaceAll("a", "Z");
// console.log(result)
//  // search() - Searches a string for a value, or regular expression, and returns the index (position) of the match

// console.log(str2.search("a")) // 1
// console.log(str2.search(/an/)) // 5


// slice - Extracts a part of a string

// const text = "Make anything";
// let result = text.slice(1,2);
// console.log(result)
// console.log(text.slice(3))

// // split - Splits the words.
// // Returns an array.

// console.log(text.split("")); // ['M', 'a', 'k', 'e',' ', 'A', 'n', 'y','t', 'h', 'i', 'n','g']

// console.log(text.split(" ")) // [ 'Make', 'Anything' ]
// console.log(text.split("a")) // [ 'M', 'ke ', 'nything' ]
// // startsWith - Check if a string starts with specified substring

// const a1 = "Make Anything";
// console.log(a1.startsWith("M")) //  true
// console.log(a1.startsWith("Make")) //  true
// console.log(a1.startsWith("Anything")) //  false
// console.log(a1.startsWith("thing")) //  false


// substr() - Extracts number of characters from a string
// substr(startindex, numberOfCharacter);

// substring() - Extract characters from a string, between two specified index;
// substring(startIndex, endIndex)
// const str = "Make Anything";
// console.log(str.substr(1, 5)) // ake A
// console.log(str.substring(1, 3))// ak

// // toLowerCase()
// // toUpperCase()

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// // trim - Removes whitespace from start and end of string
// // trim - Removes whitespace from start and end of string
// // trimEnd - Only removes whitespace from end
// // trimStart - Only removes whitespace from start

// const str1 = "  Make Anything  ";
// console.log(str1.trim()) // Make Anything


// // Important for interview
// // toLowerCase()
// // toUpperCase()
// // substr()
// // substring()
// // concat()
// // includes()
// // indexOf()
// // replace()
// // replaceAll()
// // split()
// // trim()


// Number

// toString()
let num = 100;
console.log(num.toString())

// toFixed()
//  Converts a number to a string
// rounds the string to a speicfied number of decimals

num = 100.4563456;
let n = num.toFixed(2);

console.log(n, typeof n)
// Converts varibles to Numbers
// Number() -
// parseFloat() - parses a string

  console.log(Number(true));  // 1
  console.log(Number(false)); // 0
  console.log(Number("10"));//10
  console.log(Number("  10"));//10
  console.log(Number("10  "));//10
  console.log(Number("1 0  ")); // NaN
  console.log(Number(" 10  "));//10
  console.log(Number("10.33")); // 10.33
  console.log(Number("10,33")); // NaN
  console.log(Number("10 33")); // NaN
  console.log(Number("John")); // NaN

  // parseInt(); - parses a string
// parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

//   console.log(parseInt("-10")); // -10
//     console.log(parseInt(-10.33)); // -10
//   console.log(parseInt("-10.33")); // -10
//   console.log(parseInt("10")); // 10
//   console.log(parseInt("10.33"));// 10
//   console.log(parseInt("10 20 30"));// 10
//   console.log(parseInt("10 years")); // 10
//   console.log(parseInt("years 10")); // NaN
// parseFloat
console.log(parseFloat("-10")); // -10
console.log(parseFloat(-10.33)); // -10
  console.log(parseFloat("-10.33")); // -10.33
  console.log(parseFloat("10")); // 10
  console.log(parseFloat("10.33"));// 10.33
  console.log(parseFloat("10 20 30"));// 10
  console.log(parseFloat("10 years")); // 10
  console.log(parseFloat("years 10")); // NaN




let str = "Make Anything";
let result = str.match(/world/);
console.log(result);



