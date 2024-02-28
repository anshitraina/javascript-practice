// // for
//  for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element); 
// }
 

for (let i = 0; i <=10; i++) {
    //console.log(`outer loop value: ${i}`);

    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop value: ${j} and outer loop value ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
    }
    
}

myArray= ["batman","superman", "flash", "ironman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}
    
// break
for (let a = 1; a <= 20; a++) {
    if (a==5) {
        console.log("5 is detected");
        break  
    }
    console.log(`The value is: ${a}`);
    
}

// continue
for (let a = 1; a <= 20; a++) {
    if (a==5) {
        console.log("5 is detected");
        continue 
    }
    console.log(`The value is: ${a}`);
    
}

