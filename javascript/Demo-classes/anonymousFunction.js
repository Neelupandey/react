// var wish = function(){
//     console.log("good morning")
// }

// wish();


// var wish = function(num1){
//     if(num1>=0){
//     console.log("positive no.");
//     }else{
//         console.log("negative no.");
//     }
// }
// wish(-25);
// wish(25);

//------------------------------------------------------

// function myfn(num1){   
//         console.log("my function");
//         num1();
// }
// myfn(function(){
//     console.log("good morning");
// });

//------------------------------------------------------------


// function myfn(num1){   
//     console.log("my function");
//     num1();
// }
// myfn(function(){
//     var CP = 2000;
//     var SP = 2100;
//     var result = SP - CP ;
// console.log(result);
// });


// function myfn(f1){
//     f1();
//   }
//   myfn(function(){
//       console.log("good morning");
//   });

// function myfn(num1,print){
//     var res = num1*num1;
//     console.log("result is", res);
//     print();
//   }
//   myfn(function(){
//       console.log("hii every one");
//   });

//--------------------------------------------------

// function wish(){           // higher order function(HOF)
    
//         return function(){        
//             console.log("welcome");
//         }
//       }
      
// var myfn = wish();
// myfn();

//----------------------------------------------------

function wish( num1,num2){          // HOF
    

        console.log(num1+num2);
        print("anonymous function with parameter");
    }
    wish(10,20,function(msg){   // call back function
        console.log(msg);
        
  })

