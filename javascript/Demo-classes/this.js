// // `this`  keyword in Javascript
// // this refers to the object it belongs.

// // It has different valeues depending on where it is used:
// // - Alone, this refers to the global object (In browser it's window)
// // - In a object method, `this` refers to the owner object.
// // - In a function, `this` refers to the global object (non-strict mode), or `undefined` in strict mode.
// // - call, apply, and bind to explicitly this.


// // `this`  keyword in Javascript
// // this refers to the object it belongs.

// // It has different valeues depending on where it is used:
// // - Alone, this refers to the global object (In browser it's window)
// console.log(this) // Window
// // - In a object method, `this` refers to the owner object.
// const person = {
//     name: "Rohit",
//     printName: function(){
//         console.log(this.name)
//     }
// }
// // - In a function, `this` refers to the global object (non-strict mode), or `undefined` in strict mode.

// // non-strict mode
// function myFunction(){
//     console.log(this) // Window
// }

// // strict mode
// function myFunction(){
//     console.log(this) // undefined
// }

// // - call, apply, and bind to explicitly this.

// myFunction.call(person);
// // - Arrow function

// const p1 = {
//     name: "Rohit",
//     printName: function(){
//         console.log(this.name)
//     },
//     print: ()=>{
//         console.log(this)
//     }
// }
// p1.printName()
// p1.print()

// this in Arrow function
// Arrow function donot have their own this. they inherit from the inclosing context.
const p1 = {
    name: "Rohit",
    printName: function(){
        console.log(this.name)
        const some = ()=>{
            console.log(this) // p1 object
        }
        some();
    },
    print: ()=>{
        console.log(this) // Window object
    }
}
p1.printName()

const obj = {
    value: 42,
    regularFun: function(){
        console.log(this) // Enclosing object - obj
        const someArrowfunc = () =>{
            console.log(this) // obj
        }
    },
    arrowFunc: () => {
        console.log(this) // Window
    }
}



// setTimeout, setInterval

// setTimeout(funciton, timer_in_milliseconds);

// const fun = function (){
//     console.log("Hello")
// }
// setTimeout(fun, 2000)


// // Settimeout is used to delay the execution.
// setTimeout(function (){
//     console.log("Hello")
// }, 2000)

// // Used to execute a task periodically after specified seconds, until we clear it.
// const interval = setInterval(()=>{
//     console.log('Helo')
// }, 2000)

// setTimeout(function(){
//     clearInterval(interval)
// }, 10000)



// Callback hell
// Callback hell, also known as the "Pyramid of Doom," refers to a situation where callbacks are nested within other callbacks several levels deep, making the code difficult to read and maintain. This often happens in asynchronous JavaScript, where each callback depends on the result of the previous operation.
