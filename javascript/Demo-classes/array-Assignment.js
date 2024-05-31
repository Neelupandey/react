//Array Initialization: Write a program to create an array of 10 integers and initialize it with values from 1 to 10.


// let arr = new Array(10);
// for (let i = 0; i < 10; ++i) {
//     arr[i] = i + 1;
// }
// console.log("Array elements:");
// for (let i = 0; i < 10; ++i) {
//     console.log(arr[i]);
// }


//Accessing Elements: Write a program to access and print the third element of an array. 

// let arr = [10, 20, 30, 40, 50];
// console.log("Third element:", arr[2]);


//Array Length: Write a program to create an array of strings and print its length.

// let strings = ["apple", "banana", "orange", "grape", "kiwi"];
// console.log("Length of the array:", strings.length);

// //Iterate Through Array: Write a program to iterate through an array and print all its elements.

// let arr = [10, 20, 30, 40, 50];

// for (let i = 0; i < arr.length; i++) {
//     console.log("Elements of the array:",arr[i]);
// }

//Sum of Elements: Write a program to calculate and print the sum of all elements in an array of integers.

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum+arr[i];
// }
// console.log("Sum of elements:", sum);


//⁠Push and Pop Methods

//Add Element to Array: Write a program to create an array and add an element to the end using the push method.

// let arr = [1, 2, 3, 4, 5];
// arr.push(8);
// arr.push(9);
// arr.push(7);
// arr.push(10);
// console.log("Updated array:", arr);



//Remove Last Element: Write a program to remove the last element from an array using the pop method and print the removed element.

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let removedElement = arr.pop();
// console.log("Removed element:", removedElement);
// console.log("Updated array:", arr);


//Push Multiple Elements: Write a program to add multiple elements to an array using the push method.


// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// arr.push(...[7, 8, 9]);
// arr.push(...[10]);
// console.log("Updated array:", arr);


//Pop and Check: Write a program to remove the last element from an array using the pop method and check if the array is empty afterward.

// let arr = [1, 2, 3, 4, 5];
// let removedElement = arr.pop();
// let isEmpty = arr.length === 0;
// console.log("Removed element:", removedElement);
// console.log("Is the array empty?", isEmpty);



// 10. Array Modification with Push and Pop:-- Write a program to demonstrate adding and removing elements from an array using push and pop methods, then print the modified array.

let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.push(7);
arr.push(8);
console.log("Array after adding an element:", arr);
let removedElement = arr.pop();
console.log("Array after removing an element:", arr);
console.log("Removed element:", removedElement);