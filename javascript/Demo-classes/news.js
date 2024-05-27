//Write a function called add that takes two numbers as parameters and returns their sum.

function add(a,b){
    var sum = a+b;
    return sum;
    
}
var sum = add(100,200);
console.log(sum);

//Write a function called multiply that takes two numbers as parameters and returns their product.

function add(x,y){
    var multiply = x*y;
    return multiply;
    
}
var multiply = add(10,2000);
console.log(multiply);







// Object , group of primitives wrapped in {}

// 1. Object Literal
const person = {
    name: "Shiv",
    age: 90,
    isAdmin: true,
    'my name': "Kapil Sharma"
};
// console.log(typeof person)

//2. Object Constructor
//const user = new Object();
// console.log(typeof user)


// How to access
console.log(person.age)
console.log(person.isAdmin)
console.log(person['age'])
const myvar = 'isAdmin';
console.log(person[myvar]) // Computed property => isAdmin => true
//console.log(person.my name)
// Property name shorthand
const age = "90";

const myUser = {
    age // 90
};
console.log(myUser)



console.log(person['my name'])
console.log(person.myHero) // Accessing unknown properties will print undefined.



// How to delete a property of object.
console.log(person)
delete person.isAdmin
console.log(person)


// Peroperty existense

console.log(person.myHero === undefined)
console.log('name' in person)


// for...in loop
for(let key in person){
    console.log(key, person[key]);
}


// const marks = [23,45,56,7,8]
// for(let i=0; i<marks.length; i++){
//     console.log(marks[i])
// }

const marks = [23,'shiv',56,7,8]
for(let i in marks){
    console.log(i, marks[i])
}

for(let mark of marks){
    console.log(typeof mark, mark)
}




//Object Reference and copying

const person1 = {
    name: "Rohit",
    age: 30
};

const person2 = person1;

person2.age = 60;

console.log(person1, person2, person1 == person2)


const a = {};
const b = a;

console.log(a==b)



// Copy Object

let user = {
    name: "virat",
    age: 30
}

let user2 = {};

//1. Object.assign

Object.assign(user2, user);
console.log(user, user2, user==user2)

// 2. Spread operator
user2 = {...user}
console.log(user, user2, user==user2)

// 3. for...in loop
for(let key in user){
    user2[key] = user[key]
}
console.log(user, user2, user==user2)


// Methods in object, nested object
const user1 = {
    name: "Rohit",
    age: 90,
    marks: [1,2,3,4],
    // sayHi: function (){
    //     console.log("Hello", this.name)
    // }
    sayHi(){
         console.log("Hello", this.name)
    },
    address: {
        line1: "Some road",
        city: 'pune',
        printCity(){
         console.log("Hello", this.city)
      },
    }
    
}
user1.sayHi()
console.log(user1.address.city)
console.log(user1['address']['city'])

user1.address.printCity();