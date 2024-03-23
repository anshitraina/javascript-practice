//object literal 

const user={
    username: "Anshit",
    signedIn: true,
    loginCount: 8,


    getUserDetails: function(){
        // console.log("Got user details from database");
           console.log(`Username: ${this.username}`);
    }

}

console.log(user.username);
console.log(user.getUserDetails());

//constructor 

function User(username, loginCount, isLoggedIn) {
    this.username= username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    this.greeting= function () {
        console.log(`Welcome ${this.username}`);
        
    }

    return this

}
 
const userOne =new User("Anshit", 12,true)
const userTwo=new User("hitesh", 32, true)
console.log(userOne);



 