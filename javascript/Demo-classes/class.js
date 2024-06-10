const p = new Person("John");
// Person.prototype.printName = function (){
//     console.log(this.name)
// }

// Class
// Its a syntactic sugar over js existing prototype-based inheritance

class Person {
    constructor(name){
      this.name = name;
    }
    printName(){
        console.log('My name is', this.name)
    }
}
// const p = new Person("John");
// console.log(p.name)
// p.printName()