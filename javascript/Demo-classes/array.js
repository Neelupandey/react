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


//5// concat()
// Returns a new array combining one or more arrays.
// array.concat(array2,arr3,arr4);

// let arr1 = [1,2]
// let arr2 = [3,4]
// let arr3 = [5,6]
// console.log(arr1, arr2, arr3)

// arr1 = arr1.concat(arr2, arr3);
// console.log(arr1, arr2, arr3)

//6// slice()
// Returns a shallow copy of a portion of an arary
// array.slice(start-inclusive, end-exclusive)
                //  0       1         2        3
// const fruits = ['apple', 'orange', 'banana', 'kiwi'];
// const citrus = fruits.slice(1,3);
// console.log(fruits) // ['apple', 'orange', 'banana', 'kiwi']
// console.log(citrus); // Output: ['orange', 'banana']


//7// splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// array.splice(start, deleteCount, item1, ..., itemN)
                //  0       1         2        3
const fruits = ['apple', 'orange', 'banana', 'kiwi', 'anotherfruit'];
console.log(fruits)
// const citrus = fruits.splice(1, 1);
const citrus = fruits.splice(1, 1, "replaceFruit1", "replacedFruit2");
console.log(fruits)
console.log(citrus);
