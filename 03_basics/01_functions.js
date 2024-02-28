// console.log("A");
// console.log("N");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("T"); 


// function sayMyName(){
//     console.log("A");
//     console.log("N");
//     console.log("S");   //FUNCTION DEFINATION
//     console.log("H");
//     console.log("I");
//     console.log("T"); 
// }

// sayMyName()

// function addTwoNumbers(number1 , number2){   //(number1 , number2)= parameters
//     console.log(number1+number2);
// }
// addTwoNumbers(2,4)  // (2,4) = arguments 

// function addTwoNumbers(number1 , number2){   //(number1 , number2)= parameters
//     console.log(number1+number2);
// }
// const result = addTwoNumbers(3, 5)
// console.log("The result is: ", result);  // undefinded result

// function addTwoNumbers(number1 , number2){   //(number1 , number2)= parameters
//    // let result = number1+ number2
//    // return result
//      return number1+ number2
//     console.log("My name is anshit"); // it will not print as it doenst work after return in a function
      
// }
// const result = addTwoNumbers(3, 5)
// // console.log("The result is: ", result);  // undefinded result


// function loginUserMessage(username = "Machine"){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Anshit"));

// function calculateCartPrice(...num1){   // (...num1)= Rest Operator 
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,800));

// How to handle object in a function 
// const user = {
//     username: "anshit",
//     price:199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user);

// How to handle array in a function 

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
