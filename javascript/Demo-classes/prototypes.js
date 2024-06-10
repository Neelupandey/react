// // Prototypes
// // In JS, objects have a special hidden property [[Prototype]] that is either null or references another object. The object is called "prototype"

// let animal = {
//     eats: true
// }
// // console.log(animal.eats)
// // let rabbit = {
// //     jumps: true;
// // }
// // Object.create
// // Object.setPrototypeOf
// // Object.getProtypOf

// const rabbit = Object.create(animal)
// rabbit.jumps = true;
// console.log(rabbit.jumps)// true
// console.log(rabbit.eats) // true

// // When you write a property, prototype is not
// rabbit._proto__eats = "Yes";
// console.log(rabbit.eats) // Yes
// console.log(animal.eats) // true

let animal = {
    eats: true
}
// console.log(animal.eats)
// let rabbit = {
//     jumps: true;
// }
// Object.create
// Object.setPrototypeOf
// Object.getProtypeOf

const rabbit = {jumps: true};

Object.setPrototypeOf(rabbit, animal)
console.log(rabbit.eats) //true
console.log(rabbit.toString())  //[object Object]
console.log(Object.getPrototypeOf(rabbit));  //{ eats: true }
console.log(Object.getPrototypeOf(animal));   //[Object: null prototype] {}


function Person(name){
    this.name = name;
}



const p = new Person("John");

Person.prototype.printName = function (){
    console.log('Hello')
}

console.log(p.name)
console.log(p)
// console.log(p.printName())

// Person.printName()
p.printName()
// console.log()


