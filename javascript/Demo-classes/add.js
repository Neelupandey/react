// function add(a, b){
//     let square = a*a;
//     let square1 = b*b;
    
//     let sum = square + square1;
//     return sum;
// }
// ;
// let sum1 = add(3,5);
// console.log(sum1);

// let a = prompt("Enter value of a => ");
// let b = prompt("Enter value of b => ");

// let c = Math.pow(a+b,2); // isme math ka use kiya hai

// console.log(c);



let a = prompt("Enter value of a => ");
let b = prompt("Enter value of b => ");
let c = prompt("Enter value of c => ");

let D = Math.pow(a+b+c,3); 
console.log("this is your (a+b+c)^3 ", D);




function add(a, b, c){
    let square = a*a;
    let square1 = b*b;
    let square2 = c*c;
    let sum = square + square1 + square2 ;
    return sum;
}
;
let sum1 = add(prompt("Enter value of a -"), prompt("Enter value of b -"), prompt("Enter value of c -"));
console.log("this is your a2 + b2 + c2 ", sum1);