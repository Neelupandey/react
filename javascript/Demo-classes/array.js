// const a = 5;
// const obj = {
//     name: "neelu",
//     add:{
//         line:"s-2/9"
//     }
// }
// // array creation

// let arr1 =new Array();
// let arr2 = [];
// const arr = [ 0, 1,23,true,"rohit", [2,4,6]];

// console.log(a); //5

// // access array elements
// console.log(arr1,arr2);//[][]
// console.log(arr[2]);//23
// console.log(arr[0]); //0
// console.log(arr[5][1]); //4
// // add item into array

// arr2.push(12);
// console.log(arr2); //[12]
// arr1.push(1,2,5,'A');
// console.log(arr1); // [ 1, 2, 5, 'A' ]

// arr2.push(21, [5,'neelu']);
// console.log(arr2);
// const deletElement = arr2.pop();
// console.log(deletElement);

// arr2.unshift(5,12);
// console.log(arr2);
// Array creation/Declaration

// let arr1 = new Array();
// const arr = [100,1,23,true, "rohit", ['A','B'],"Sharma"];

// // Access array elements
// console.log(arr[0]) // 100
// console.log(arr[1]) // 1
// console.log(arr[2]) // 23
// console.log(arr[5][0]) // 
// console.log(arr[6]) //

// 1// push()
// // Adds one or more elements to the end of an array.
// // array.push(el1, el2,....)
// let arr2 = [];
// arr2.push(12)
// arr2.push(15)
// arr2.push(20)
// arr2.push(50,200)
// console.log(arr2)


// 2// pop()
// // Removes the last element from array.
// // array.pop()
// let deletedElement = arr2.pop();
// console.log(arr2)
// console.log(deletedElement)


// 3// unshift()
// // Adds one or more elements to beginning of an array.
// // array.unshift(el1, el2, el3)

// arr2.unshift(500,1000)
// console.log(arr2)


// 4// shift()
// // Removes the first element from array.
// // array.shift()
// deletedElement = arr2.shift();
// console.log(arr2)
// console.log(deletedElement)


// 5// concat()
// Returns a new array combining one or more arrays.
// array.concat(array2,arr3,arr4);

// let arr1 = [1,2]
// let arr2 = [3,4]
// let arr3 = [5,6]
// console.log(arr1, arr2, arr3)

// arr1 = arr1.concat(arr2, arr3);
// console.log(arr1, arr2, arr3)

// 6// slice()
// Returns a shallow copy of a portion of an arary
// array.slice(start-inclusive, end-exclusive)
//                  0       1         2        3
// const fruits = ['apple', 'orange', 'banana', 'kiwi'];
// const citrus = fruits.slice(1,3);
// console.log(fruits) // ['apple', 'orange', 'banana', 'kiwi']
// console.log(citrus); // Output: ['orange', 'banana']


// 7// splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// array.splice(start, deleteCount, item1, ..., itemN)
//                  0       1         2        3
// const fruits = ['apple', 'orange', 'banana', 'kiwi', 'anotherfruit'];
// console.log(fruits)
// // const citrus = fruits.splice(1, 1);
// const citrus = fruits.splice(1, 1, "replaceFruit1", "replacedFruit2");
// console.log(fruits)
// console.log(citrus);

// indexOf()

// const fruits = ['apple', 'orange', 'banana', 'apple', 'anotherfruit'];

// const index = fruits.indexOf('banana');
// const index1 = fruits.indexOf('apple');
// const index2 = fruits.indexOf('apple',2);
// console.log(index);
// console.log(index1)
// console.log(index2);

// indexOf()
// Returns the fist index at which a given element is present in the array, or -1 if not found
// array.indexOf(searchElement, fromIndex);

// let fruits = ['apple', 'organge', 'banana', 'kiwi', 'apple'];
// const index = fruits.indexOf('apple');//0
// const index1 = fruits.indexOf('apple', 1);//4
// const index2 = fruits.indexOf('AnotherFruit');//-1

// console.log(index, index1, index2)
// // lastIndexOf()
// // Returns the last index at which a given element is present in the array, or -1 if not found
// // array.lastIndexOf(searchElement, fromIndex);
//  fruits = ['apple', 'organge', 'banana','apple','banana', 'kiwi', 'apple'];
// const index3 = fruits.lastIndexOf('apple');//6
// const index4 = fruits.lastIndexOf('apple', 4);//4
// console.log(index3, index4)

// forEach()
// Calls a function for each element in the array.
// Syntax: `array.forEach(callback(currentValue, index, array), thisArg)`

// i = 3
// 3
// const fruits = ['apple', 'orange', 'banana'];
// console.log(fruits.length)

// // for(let i=0; i < fruits.length; i++){
// //     const fruit = fruits[i];
// //     console.log(fruit)
// // }

// //   'banana'       2     
// const mapper = function (currentValue, index){
//     console.log(currentValue, index)
// }

// // Way - 1
// fruits.forEach(mapper)

// // Way - 2
// fruits.forEach(function (currentValue, index){
//     console.log(currentValue, index);
// })

// map()


// let numbers = [1, 2, 3, 4];
// // let multNumbers = [];
// // for(let i=0; i < numbers.length; i++){
// //         const num = numbers[i]*2;
// //         multNumbers.push(num);
       
// //     }
// //     console.log(numbers);
// //     console.log(multNumbers);
// let multNumbers1 = [];
//     let multNumbers = numbers.map(function(currentValue,index){
//         //console.log(currentValue,index)
//         return currentValue*2;
//     });
//     console.log(numbers);
//     console.log(multNumbers1,multNumbers);

// map, filter, reduce - What is the difference between

// map()
// The map() method creates a new array by applying a function to each element of the original array.
// array.map(callback(currentValue, index, array))

// let numbers = [1, 2, 3, 4];
// //Multiply by 2 to each array element.

// // let multipliedNumbers = [];
// // for(let i=0; i < numbers.length; i++){
// //     const num = numbers[i]*2
// //     multipliedNumbers.push(num)
// // }
// // console.log(numbers)
// // console.log(multipliedNumbers)

// let multipliedNumbers = numbers.map(function (currentValue){
//     return currentValue*2;
// })
// console.log(numbers)
// console.log(multipliedNumbers)


// let words = ['apple', 'banana', 'orange', 'kiwi'];
// let uppercasedWords = words.map(function (word) {
//   return word.toUpperCase();
// });
// console.log(uppercasedWords); // Output: ['APPLE', 'BANANA', 'ORANGE', 'KIWI']

// filter()
// The filter() method creates a new array with elements that pass a certain condition defined by a provided function.
// array.filter(callback(currentValue, index, array))

// let numbers = [10, 20, 30, 40, 50];
// // let filteredNumbers = [];
// // for(let i=0; i < numbers.length; i++){
// //     if(numbers[i] >30){
// //         filteredNumbers.push(numbers[i])
// //     }
// // }
// let filteredNumbers = numbers.filter(function (num) {
//   return num > 30;
// });
//  console.log(filteredNumbers); // Output: [40, 50]

// //reduce()
// // The reduce() method reduces the array to a single value, applying a function against an accumulator and each element.
// // `array.reduce(callback(accumulator, currentValue, index, array), initialValue)`

//              0  10  30  60  => 100
 let numbers = [10, 20, 30, 40];

// // let sum =0;
// // for(let i=0; i < numbers.length; i++){
// //     sum = sum+numbers[i]
// // }
// // console.log(sum)
let sum = numbers.reduce(function (acc, num, index) {
    console.log("index=", index, "acc=", acc, "num=", num)
  return acc + num;
}, 0);
console.log(sum)