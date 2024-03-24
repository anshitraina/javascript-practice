










function createUser(username, score){
    this.username=username
    this.score=score

}
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe= function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser('chai', 23)
const coffee=new  createUser('coffee', 56 )


chai.increment()

chai.printMe()
coffee.printMe()