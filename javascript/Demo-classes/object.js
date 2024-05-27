//// Object.keys, Object.values, Object.entries

// const user = {
//     name:"rohit",
//     surname:"sharma",
//     age:20,
//     isAdult:true
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// const user = {
//     name:"rohit",
//     surname:"sharma",
//     age:20,
//     isAdult:true,
//     printName:function(){
//         console.log(this.name)
//         console.log(this.surname)
//     }
// }
// user.printName()
// console.log(user.age)

//Object.freeze, Object.seal

// const user = {
//     name:"rohit",
//     surname:"sharma",
//     age:20,
//     isAdult:true,

// }
// Object.freeze(user)
// user.age=30;
// user.city = "Pune";
// delete user.age;
// console.log(user)


const user = {
    name:"rohit",
    surname:"sharma",
    age:20,
    isAdult:true,

}
Object.seal(user)
user.age=30;
user.city = "Pune";
delete user.age;
console.log(user)


// In case of freeze you can't update the value of existing property. But in case of seal you can update the existing field value.