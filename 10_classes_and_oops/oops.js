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
