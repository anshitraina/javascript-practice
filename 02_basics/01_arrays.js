// array 

const myArr=[0,1,2,13,4,5]

const myHeros =["Ironman","Thor"]

const Arr2 = new Array(1,2,3,4)

// console.log(myArr[0]);
// console.log(myHeros.length);
// console.log(Arr2);

// Array methods

// myArr.push(6) 
// myArr.push(7) // add element in array in last
// myArr.pop() // remove last element from array
// myArr.unshift(9) // add element in first
// myArr.shift() // remove first element from array
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join() // Join binds our array and convert it into strings

// console.log(myArr);
// console.log(typeof newArr);

//slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1); 
console.log(myArr); // slice didn't maniplute the array

console.log("B ", myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log(myArr);  // splice maniplutes the array



