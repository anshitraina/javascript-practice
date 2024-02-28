//There are three types of scope in js
// Block Scope : 
// {
//   var x = 2;
// }
// x can NOT be used here
// **********************************//
// Function Scope:
// function myFunction() {
//     var carName = "Volvo";   // Function Scope
//   }
//***********************************//
// Global scope 
// let carName = "Volvo";
// // code here can use carName

// function myFunction() {
// // code here can also use carName
// }
// **********************************//

// let a = 100
// const b = 200    // global scope: outside any function 
// var c = 300

// if (true){
//     let a = 10
//     const b= 20      // if ke andar block scope 
//     var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c);

// let a =300
// if (true){
//     let a = 10
//     const b= 20      
//     console.log("Inner value: ", a );
// }
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);

// Nested Functions
// function one(){
//     const username = "anshit"

//     function two(){
//         const website = "Youtube"
//         console.log(username);
        
//     }
//     // console.log(website);
    

//     two()
// }
// one()

//*****************************************//

// if (true){
//     const username= "hitesh"
//     if(username==="hitesh") {
//         const website =  " youtube"
//         console.log(username+website);
//     }
//     // console.log(website);
// }
// // console.log(username);

//*************   intresting********************//

console.log(addone(5));
function addone(num){
    return num+1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(6));
