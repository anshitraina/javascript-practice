  // reduce


  const myNums= [1,2,3]

//   const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`accumulator: ${accumulator} and Current-Value: ${currentvalue} `);
//     return accumulator+currentvalue
//   },0)
//   console.log(myTotal);


// using arrow function

// const myTotal = myNums.reduce((accumulator,currentvalue)=>{
//     console.log(`accumulator: ${accumulator} and current-Value: ${currentvalue}`); return accumulator+currentvalue},0)
// console.log(myTotal);
const shoppingCart = [
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Java",
        price: 1999
    },
    {
        itemName: "Cpp",
        price: 1399
    },
]

const billToPay =  shoppingCart.reduce((accumulator,item)=>{return accumulator+item.price
},0)
console.log(billToPay);

// ====================End======================