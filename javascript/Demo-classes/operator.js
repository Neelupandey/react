// var a= 100;
// var b= 50;
// var c= a+b;
// console.log(c);

// console.log('------1-----');
// var x= true;
// var y= "1";
// console.log(x==y); // true
// console.log(x===y);  // false

// console.log('------2-----');
// var x= true;
// var y= 1;
// console.log(x==y); //true
// console.log(x===y); // false

// console.log('------3-----');
// var x= false;
// var y= "0";
// console.log(x==y); //true
// console.log(x===y); // false

// console.log('------4-----');
// console.log(null==undefined); // true
// console.log(null===undefined);  // false

// console.log('------5-----');
// console.log(0=="");  // true
// console.log(0==="");  // false

// console.log('------! not eqal to 1-----');

// var x= 10;
// var y= 10;
// console.log(x!=y); // false
// console.log(x!==y);// false


// console.log('------! not eqal to 2-----');

// var x= 10;
// var y= "10";
// console.log(x!=y); //false
// console.log(x!==y);//true



console.log('------&& 1-----');

var x= 10;
var y= 20;

console.log(x>=10 && y>20); //false
console.log(x<10 || x < y);//true
console.log(x>=10 && x<y);  //true
console.log(x>0 && x<y && y>=20); //true


console.log((x>=10 && y<=20) || x>y);//true


var x= 10;
var y= 20;
var z= 15;
console.log(x>y && y<z); // false 

var x= 10;
var y= 20;
var z= 15;
console.log(!(x>y) && (y<z || z>15)); // false
console.log(!((x>y) && (y<z || z>15))); // true

console.log(!(null == undefined)); // true
console.log(null && undefined); // null
console.log(null || undefined);  // undefined
console.log(!(false===""));  // true



var x = 20;
(x % 2== 0)?console.log("even no."):console.log("odd no.");   // even no.
(x % 2== 1)?console.log("even no."):console.log("odd no.");   // odd no.


var z = 21;
var c= null;
c=(x % 2 == 0)? "even":"odd";
console.log(c);
