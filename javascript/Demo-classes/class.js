// const p = new Person("John");
// // Person.prototype.printName = function (){
// //     console.log(this.name)
// // }

// // Class
// // Its a syntactic sugar over js existing prototype-based inheritance

// class Person {
//     constructor(name){
//       this.name = name;
//     }
//     printName(){
//         console.log('My name is', this.name)
//     }
// }
// const p = new Person("John");
// console.log(p.name)
// p.printName()


// class 
//A class is a blueprint for creating object with predefined properties and methods.

// function User(name){
//     this.name = name;
//     this.greet = function () {
//         console.log(this.name);
//     }
// }
// const u1 = new User("John");

// u1.greet()

// class User{
//   age = 10;
//   constructor(name){
//       this.name = name;
//   }
//   greet(){
//       console.log(this.name, this.age)
//   }
// }

// const u1 = new User("John");

// u1.greet();g



// Anonymous Class Expression
// const User = class {
//   age = 10;
//    constructor(name){
//        this.name = name;
//    }
//    greet(){
//        console.log(this.name, this.age);
//    } 
// }




// Constructor
// The method for crating and initializing objects created with a class.
// class Car{
//   constructor(md, ye){
//       this.model = md;
//       this.year = ye;
//   }
//   info(){
//       console.log(`My car is ${this.model}, and registered in ${this.year}`)
//   }
// }

// const myCar = new Car('Tata Punch', 2024);
// myCar.info()


// Instance methods
// It is defined inside a class and are available on the class instances.



// Static Methods
// Static Methods are class methods
// Instance methods are methods of class instance
// class MathUtil{
//   static pi = 3.14;
//   static square(number){
//       return number*number;
//   }
//   info(){
//       console.log("Hi")
//   }
// }

// // Instance Method exectution
// const m1 = new MathUtil();
// m1.info()

// // Static method execution
// console.log(MathUtil.square(5))
// console.log(MathUtil.pi)
// console.log(typeof(MathUtil))



// Class Inheritance
// Extending classes to inherit from other classes

// let animal = {
//     eats: true
// }

// let rabbit = Object.create(animal);
// rabbit.jumps = true;

// console.log(animal)
// console.log(rabbit.eats)

// class Animal{
//   eats =  true;
//   eat(){
//       console.log("It is eating")
//   }
// }

// class Rabbit extends Animal{
//   jumps = true;
//   jump(){
//       console.log('Jumping')
//   }
// }

// // const animal = new Animal();
// // console.log(animal.eats)
// const rabbit = new Rabbit();
// rabbit.jump()
// rabbit.eat()
// // console.log(rabbit)


// Super keyword to call  the parent constructor
// class Animal{
//   eats =  true;
//   constructor(){
//       console.log('Animal constructor is exectuted.')
//   }
//   eat(){
//       console.log("It is eating")
//   }
// }

// class Rabbit extends Animal{
//   jumps = true;
//   constructor(){
//       super(); // Call the parent constructor
//       console.log('Rabbit constructor is exectuted.')
//   }
//   jump(){
//       console.log('Jumping')
//   }
// }


// const rabbit = new Rabbit();
// // rabbit.jump()



// class Shape{
//   constructor(color){
//       this.color = color;
//   }
//   describe(){
//       console.log('A shape of color ', this.color);
//   }
// }

// class Circle extends Shape{
//   constructor(color, radius){
//       super(color);
//       this.radius = radius;
//   }
//   describe(){
//       super.describe();
//       console.log('It has radis: ', this.radius)
//   }
// }

// const myCircle = new Circle('red', 10);
// myCircle.describe()



// class Shape{
//   constructor(color){
//       this.color = color;
//   }
//   describe(){
//       console.log('A shape of color ', this.color);
//   }
// }

// class Circle extends Shape{
//   constructor(color, radius){
//       super(color);
//       this.radius = radius;
//   }
//   describe(){
//       super.describe();
//       console.log('It has radis: ', this.radius)
//   }
// }
// class Triangle extends Circle{
//   constructor(color, radius, name){
//       super(color, radius);
//       this.name = name;
//   }
//   info(){
//       console.log(this.name)
//       console.log(this.color)
//       console.log(this.radius)
//   }
// }

// const tri = new Triangle('red', 10, "Rohit");
// tri.describe()
// tri.info()



// Getters and Setters

class User{
  // firstName = "Rohit";
  // lastName = "Sharma";
  constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
  }
  get fullName(){
      return this.firstName + ' '+this.lastName;
  }
  set fullName(fullNm){
      this.firstName = fullNm.split(' ')[0]
      this.lastName = fullNm.split(' ')[1]
  }
}
const u1 = new User("Rohit", "Sharma");
console.log(u1.fullName)
u1.firstName = "Virat"
console.log(u1.fullName)