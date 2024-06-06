// const name = "rohit";
// const user ={
//     name : name,
//     age:25
// }
// const user1={
//     name,
//     age:25
// }

//Default parameters = function
// function greet(){
//     console.log('hello rohit');

// }
// function greet1(name = 'rohit'){
//     console.log('hello',name);

// }
// greet();
// greet1();
// greet1('neelu');


// // Default Parameters - Functions

// function greet(){
//     console.log('Hello Rohit')
// }

// function greet1(name = "Stranger"){
//     console.log('Hello ', name)
// }

// // greet();
// // greet1();
// // greet1();
// // greet1();
// // greet1("Hardik");
// // greet1("Rohit");
// function greet2(name = "Stranger", greeting="Hello"){
//     console.log(`${greeting} ${name}`)
// }
// greet2()
// greet2("John")
// greet2("Emily", 'Hi')
// greet2("Hi")

// // Default parameters are always kept at the end.
// function greet3(name, age=20){
//     console.log(`${age}${name}`)
// }
// greet3('Rohit', 30)

// Destructuring Assignment

// 1. Array Destructuring
//   const numbers = [1,2,3,4,5,6];
//   const first = numbers[0];
//   const second = numbers[1];
//   const third = numbers[2];

    // const [first, second, third,,fifth] = numbers;
    // console.log(first,second, third, fifth)
    
    
    // const [first, second, third, ...others] = numbers;
    // console.log(first,second, third, others)
//     let fruits = ["Apple", "Orange", "Plum"];
    
//     const [f1, f2, f3, f4="Rohit"] = fruits;
    
//     console.log(f1, f2, f3, f4)
   

// // 2. Object Desturing
   
//    const person = {name1:"John", age: 30, city: "Pune"};
   
// //   const name = person.name;
// //   const age = person.age;
// //   const cityVariable = person.city;

// //   let {name, age, city} = person
// //   console.log(name, age, city) // John 30 Pune

//   let {name1, age, city:cityVariable, pincode = 10000} = person
// console.log(name1, age, cityVariable)

const person = {
    Name : "john",
    age : 30,
    city :"pune",
    address:{
        line1:"lin1 adrees",
        line2:"lin2"
    }
};
// const {Name,age,city,address}=person;
// console.log(Name,age,city,address);

const { Name, age,...otherValues}=person;
console.log(Name,age,otherValues);
