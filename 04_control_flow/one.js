// if 
// const isUserloggedIn = true
// if (2== "2"){
//     console.log("executed");
// }
// ===============================
// // <, >, <=, >=, ==, !=,===

// const temperature = 41
// if(temperature<50){
//     console.log("less than 50");
// } else{
//     console.log("Greater than 50");
//}
// ================================
// const score = 200
// if (score> 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// ================================
// const balance=1000
// if(balance<500) {
//     console.log("less than 500")
// }else if (balance<700) {
//     console.log("less than 700")  
// }else if (balance<900){
//     console.log("less than 900")  
// }else {
//     console.log("less than 1200");
// }

// ===========================
const userLoggedIn= true
const debitCard = true

if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

const userLoggedInfromGoogle= false
const userLoggedInfromEmail = true

if (userLoggedInfromGoogle || userLoggedInfromEmail || 2==2){
    console.log("Logged in");
}