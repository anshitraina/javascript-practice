// // **************This Keyword**************
// // This is about current context
// const user = {
//     username: "Anshit",
//     price: 999,

//     welcomeMessage: function name() {
//         console.log(`${this.username} , welcome to website`);
//         // console.log(this);
//     }
//  }
// // user.welcomeMessage()
// // user.username = "sam" // here we changed the context
// // user.welcomeMessage()

// console.log(this);

//  function chai() {
//     let username = "anshit"
//     console.log(this.username);  // we cannot access this in function
    
//  }
//  chai()

// const chai = function(){
//     let username = "anshit"
//     console.log(this.username);
// }
// chai()
// ******************Arrow Functions*****************
// const chai = () =>{
//     let username = "anshit"
//     console.log(this.username);
// }
// chai()

// *************************************
const AddTwo = (num1, num2) => {
    return num1 + num2                  //curly braces ke sth return likhna padega
}

console.log(AddTwo(3,5))


// -------------------------------------------

const AddTwo1 = (num1, num2) => num1 + num2
console.log(AddTwo1(3,5))

// --------------------------------------------
const AddTwo2 = (num1, num2) => (num1 + num2)
console.log(AddTwo2(3,5))

// --------------------------------------------
const AddTwo3 = (num1, num2) => ({username:"Anshit"})
console.log(AddTwo3(3,5))



