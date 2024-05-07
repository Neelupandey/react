
// var text = "";

// for (var i = 0; i < 5; i++) {
//   text += "The number is " + i ;
//   break;
// }
// console.log(text);

// -----2----
// var  i= 1
// while (i <= 10) {
//     console.log(i);
//     i++;
//   }

  //-----3----

//   var  num = 1
// while (num <= 10) {
//     console.log("good morning");
//     num++;
//   }

  //------4-----

  // var  num = 11;
  // while (num <= 50) {
  //   if(num % 3==0 && num % 5 == 0){
  //     console.log(num);

  //    } 
  //   num++;
  // }

  //------5------

  // var  num = 1;
  // while (num <= 100) {
  //   if(num % 3==0 && num % 5 == 0){
  //     console.log(num);

  //    } 
  //   num++;
  // }

  // for loop
  //-----1-----
  // for ( var i = 0; i < 10; i++) {
  //  console.log(i + 1);
  // }

  //------2-----
  
  // for ( var i = 11; i < 20; i++) {
  //   if(i % 2 !=0){
  //   console.log(i);
  //  }
  // }

  //-----3----

  // for ( var i = 11; i < 20; i= i+2) {
  //   console.log(i);
   
  // }

  //-----4-----
  // for ( var i = 0; i <= 10; i++) {
  //  console.log(i * 2);
  // }

  //-----5-----
  // for ( var i = 10; i >=1; i--) {
  //  console.log(i);
  // }

//------6------

// for ( var i = 10; i < 20; i= i+2) {
//   console.log(i);
//  }

//-------7-----


var num=11;
var isprime = true;
for(var i=2; i<num; i++){
  if(num%i==0){
    isprime = false;
  }
}
if(isprime){
  console.log("given no. is a prime no.");
}else{
  console.log("given no. is not a prime no.");
}

