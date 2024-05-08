//1.  Find sum of elments from 1 to 10 (using for loop) and while loop

// var sum = 0;
// var i = 1;
// while (i <= 10){
//   if(i%2==0){
//     sum= sum + i ;
//   }
//   i++
// }
// console.log(sum);

//------------------------------------------------------------------

//2.  Print 5's Table on console

// for ( var i = 1; i <= 10; i++) {
//      console.log(i * 5);
//     }


//-------------------------------------------------------------------

//3.  print the number between 5 to 100 which is divisible by 2 and 5.


// for (var i = 5; i <= 100; i++) { 

// 	if (i % 2 == 0 && i % 5 ==0) { 
// 		console.log(i); 
// 	} 
// }


//-----------------------------------------------------------------

//4.  Find the Factorial of given Number.     Input : 5     Output : 120

// var fact = 5;
// var temp = 1;


// for (var i = 0; i < fact; i++){
//     temp = temp * (fact - i);
// }
// console.log(temp);



//----------------------------------------------------------------

//5.  Print a String in reverse Order.  Input : "Hello"      Output : "olleH";



// var str = "Hello";
// var rev = "";
// for(var i=str.length-1; i>=0; i--){
//     rev=rev+str[i];
// }
// console.log(rev);


//----------------------------------------------------------------------

//6. Print the maximum number.    Input : var numArr = [ 20,23,30,45,34]        O/p : 45

// var numArr = [20,23,30,45,34,29,49,10];
// var max=[0];
// for(var i=1;i<numArr.length; i++){
//     if(numArr[i]>max){
//         max=numArr[i];
//     }
// }
// console.log(max);

//6.1. Print the smallest number.

// var numArr = [20,23,30,45,34,29,49,10];
// var min=numArr[0];
// for(var i=1;i<numArr.length; i++){
//     if(numArr[i]<min){
//         min=numArr[i];
//     }
// }
// console.log(min);

//------------------------------------------------------
//7. Rever the Given number.     Input : 123    Output :321

var num = [1,2,3,4,5];
var rev = "";
for(var i=num.length-1; i<=0; i--){
    var val = num[i];
    rev=val-num[i];
    
}
console.log(rev);

//====================================================================================================

// 6-05-24
//1.Check whether the given number is divisible by 3 and 5 or not.

// var i;
// for(i=1;i<=100;i++){
//   if(i%3==0 && i%5==0){
//     console.log(i)
//   }
// }

//------------------------------------------------------------------------------------
//2. If number is between 6 and 12 print "Good Morning" Message   If number is between 12 and 18 print "Good afternoon" message   else "good evening"

// var  num1 = 10;
// if(num1 >= 6 && num1<= 12) {
//     console.log("good morning");
//   } else if(num1 > 12 && num1 <=18) {
//     console.log("good afternoon ");
//   } 
//   else{
//     console.log("good evening ");
//   }

//--------------------------------------------------------------------------------------
//3. Print the maximum number among three numbers  var num1:number = 10 ;  var num2:number = 20 ;  var num3:number = 30 ;

// const num1 = 10;
// const num2 = 20;
// const num3 = 30;
// let largest;
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }
// console.log("The largest number is " + largest);

//-----------------------------------------------------------------------------
//4. var userId : string = "test123";
//var password:string = "welcome123";

//check whether userId is "test123" and password is "welcome123" if credentials matches
//print "user id and password correct"
//else "please enter the valid credentials"; 



// var userId = "test123";
// var password = "welcome123";
// if (userId == "test123" && password =="welcome123") {
//     console.log("user id and password correct");
//   }
//   else{
//     console.log("please enter the valid credentials");
//   }