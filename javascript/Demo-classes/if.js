//-------1--------
// var num1= prompt("Enter a number");
// if(num1 %2==0){
//     console.log("even no.");
// }
  
//------2-------
// var num1= prompt("Enter a number");
// if(num1 % 2===0){
//     console.log(num1 +" is even no.");
// }
// else{
//     console.log(num1 +"is odd no.");
// }


//------3-------
// var age = 21;
// if (age >= 18 && age <  65) {
//     console.log("eligible for policy");
//   }
//   else{
//     console.log("not eligible for policy");
//   }

//------4-------
// var  price= 300;
// var discount = 0;
//   if (price < 100) {
//     discount=0;
//     //console.log("discount is 10 rs.")
//   } else if (price< 200 && price>= 100) {
//     discount= 15
//     //console.log("discount is 15 rs. ")
//   } else {
//     discount= 50;
//   }
//   console.log("discount is "+ discount)

//------5-------
// var  num1 = 20;

//   if(num1 >= 6 && num1<= 12) {
//     console.log("good morning");
//   } else if(num1 > 12 && num1 <=18) {
//     console.log("good afternoon ");
//   } 
//   else{
//     console.log("good evening ");
//   }

//------6-------

// var greet ="ga";
// switch(greet){
//     case"gm":{
//         console.log("good morning");
//        break;

//     }
//     case"ga":{
//         console.log("good afternoon");
//         break;

        
//     }
//     case"ge":{
//         console.log("good enving");
//         break;

        
//     }
//     case"gm":{
//         console.log("good morning");
//         break;      
//     }
//   }
 
// var day = 9;
// switch (day) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
//     break;
//   default : 
//   day="invailid";
// }
// console.log(day);
// }


// const age =10;
// if(age>18){
//   console.log("he is an adult");
// }
// else{
//   console.log("he is an child");
// }  

// let accessAllowed = false;
// const age =20;
// if(age>18){
//   accessAllowed = true;
// }else{
//   accessAllowed = false;
// }

// let whois = age>18?'adult':'child';
// console.log(whois)


// let shoesize = 2;

// if(shoesize==2){
//   console.log('to small');
// }
// else if(shoesize==4){
//   console.log('good');
// }
// else if(shoesize==5){
//   console.log('to big');
// }
// else{
//   console.log('unknown size');
// }

let shoesize = 7;
  switch (shoesize) {
  case 2:
    console.log('to small');
    break;
  case 4:
    console.log('good');
    break;
  case 5:
    console.log('to big');
    break;
    default : 
    console.log('unknown size');
  }