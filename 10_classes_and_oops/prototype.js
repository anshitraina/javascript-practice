let myHeros =["thor", "spiderman"]

let heroPower= {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.getSpiderPower}`);
    }
} 
Object.prototype.anshit= function(){
    console.log("anshit is present in all objects");
}
Array.prototype.heyanshit=function(){
    console.log("Anshit says hello");
}

// heroPower.anshit()
myHeros.anshit()
myHeros.heyanshit()



//Inheritance 

const User={
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport={
    makeAssignment: 'JS assignment',
    fullTime: true
    // __proto__: TeachingSupport
}

Teacher.__proto__=User

console.log(TASupport.isAvailable);

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)




let anotherUsername= "AnshitRaina       "
String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
 
"rahul   ".trueLength()


// jisne call kiya vohi this hai 