// // DAY-1-----------------------------------
// //Write a function called add that takes two numbers as parameters and returns their sum.

// function add(num1, num2) {
//     return num1 + num2;
// }
// //console.log(add(5, 3));
// let result = add(2,3);
// console.log(result);


// //Write a function called multiply that takes two numbers as parameters and returns their product.

// function multiply(num1, num2) {
//     return num1 * num2;
// }
// //console.log(multiply(5, 3));
// let res = multiply(2,3);
// console.log(res);


// //Write a function called greet that takes a name as a parameter and returns a greeting message including that name.

// function greet(name) {
//     return "Hello, " + name + "!";
// }
// //console.log(greet("neelu"));
// let rest = greet('neelu');
// console.log(rest);


// // Write a function called isEven that takes a number as a parameter and returns true if the number is even, and false otherwise.

// function isEven(number) {
//     return number % 2 === 0;
// }

// //console.log(isEven(4));
// let results = isEven(5);
// console.log(results); 


// // DAY-2----------------------

// //Create an object named "person" with properties "name", "age", and "city". Assign values to these properties and then log the entire object to the console.

// // var person = {
// //     name: "Neelu",
// //     age: 25,
// //     city: "Bhopal"
// // };
// // console.log(person);

// // person.surname = "Pandey";
// // console.log(person);

// // Define a function called "printInfo" that takes an object as a parameter and prints out each key-value pair in the format "key: value".

// // function printInfo(obj) {
// //     for (var key in obj) {
// //         if (obj.hasOwnProperty(key)) {
// //             console.log(key + ": " + obj[key]);
// //         }
// //     }
// // }
// // printInfo(); 



// 1) Create an object named "person" with properties "name", "age", and "city". Assign values to these properties and then log the entire object to the console.

// let person = {
//     name:"piyush",
//     age:50,
//     city:"Bhopal"
// }


// let person1 = Object.create(person);
// // let person1 = Object.assign(person); 
// // let person1 = Object.entries(person);

//     person1.name = "neelu";
//     person1.age= 25;
//     person1.city="kanpur";
// // console.log(person1);
// // console.log(person1['age']);
// // console.log(person1['city']);
// // console.log(person1['name']);

// console.log(person1);
// console.log(person);



// 2) Define a function called "printInfo" that takes an object as a parameter and prints out each key-value pair in the format "key: value".

function printInfo(obj) {
    for (const key in obj) {
        console.log(${key}: ${obj[key]});
    }
}

let boy = {
    fname: "astha gill",
    sname: "salkdf",
    nou :39
}

printInfo(boy);


// 3) Write a program that checks if a given property exists in an object. The program should take an object and a property name as input and return true if the property exists in the object, otherwise return false.

// function hasProperty(obj, propName) {
//     return propName in obj;
// }

// // Example usage
// const info = {
//     name: "Alice",
//     age: 30,
//     city: "New York"
// };

// console.log(hasProperty(info, "name"));     
// console.log(hasProperty(info, "country"));