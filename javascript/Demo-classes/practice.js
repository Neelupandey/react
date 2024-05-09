// let n = 5;
// let power = 2; 
// let num = 1; 
// for (let i = 0; i < power; ++i) { 
//     num = num * n; 
// }
// console.log(num);



// let CP = 1500;
// let SP = 2000; 
   
// if (SP == CP) 
//     console.log("No profit nor Loss"); 

// else if (SP > CP) 
//     console.log( " Profit "); 

// else
//     console.log(" Loss "); 


function profit(CP,SP) {
    if (SP == CP)
        console.log("No profit nor Loss");

    else if (SP > CP)
        console.log(" Profit ");

    else
        console.log(" Loss ");
}
profit(2000, 5000);
profit(1200, 1100);
profit(2320, 2320);
