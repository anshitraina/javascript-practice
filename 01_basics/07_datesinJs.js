// Dates 
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  // type of date is object

// let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate= new Date("01-14-2023")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); //convert milliseconds to seconds


let newDate = new Date()
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));