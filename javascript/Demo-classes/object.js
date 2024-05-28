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


// const user = {
//     name:"rohit",
//     surname:"sharma",
//     age:20,
//     isAdult:true,

// }
// Object.seal(user)
// user.age=30;
// user.city = "Pune";
// delete user.age;
// console.log(user)


// In case of freeze you can't update the value of existing property. But in case of seal you can update the existing field value.

// let user = {
//     name: "virat",
//     age: 30
// }

// let user2 = {
//     name: "virat",
//     age: 30};

// //1. Object.assign

// Object.assign(user2, user);
// console.log(user, user2, user==user2)

// // 2. Spread operator
// user2 = {...user}
// console.log(user, user2, user==user2)


// let person1={
//     name:"vaishnavi",
//     native:"pune",
//     education:{
//         graduation:"computer science",
//         yop:2022,
//         college:"SGBAU",
//     },
//     subjects:["sql","java","javascript","j2ee","Manual Testing"],
//      hobies:["dancing","listerning music","Drawing"],
//     strength:["I am hardworking and asserative person"]
// }


// let person = Object.create(person1); 
// person.city="bhopal";     
// console.log(person === person1)    //reference alag
// //person.education.sub = "srt";      // person1._proto_ = person
// console.log(Object.entries(person), person1 )


let person = {
    name: "Neelu",
    contact: {
        phone: "8878127659",
        email: "pandey12@.gmail.com",
        address: {
            city: "Bhopal",
            country: "India"
        }
    }
};
const person1 = Object.create(person)
person1.city = "Bhopal";
console.log(person.contact.email);              
console.log(person);
console.log(person1);
console.log(person === person1);