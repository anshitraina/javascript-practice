// ES6

class User{
    constructor(username, email, password){
        this.username=username,
        this.email= email,
        this.password=password
    }


    encryptPassword(){
        return (`${this.password}abc`)
    }
    changeUsername(){
        return (`${this.username.toUpperCase()}`)
    }  
}

const anshit= new User("anshit", "anshit@gmail.com", "123")

console.log(anshit.encryptPassword());
console.log(anshit.changeUsername());


//behind the scene
// function User(username, email, password){
//     this.username=username;
//     this.email=email;
//     this.password=password
// }
// User.prototype.encryptPassword=function(){
//     return(`${this.password}abc`)
// }
// User.prototype.changeUsername=function(){
//     return(`${this.username.toUpperCase()}`) 
// }

// const tushar= new User("tushar", "t@gmail.com", "12345")
// console.log(tushar.encryptPassword());
// console.log(tushar.changeUsername());