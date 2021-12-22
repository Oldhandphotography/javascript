//new keyword
//marry chrismaS
//isko constructor function bhi bolte hain
function createUser(firstName , age){
    this.firstName= firstName;
    this.Age=age;
}
createUser.prototype.about=function(){
   console.log(this.firstName, this.age);
}
const use1 = new createUser("harshit",6);
console.log(use1);
//yahan new keyword empty object ko this ke baraber rkh dega aur return kerdega
//this ko return kardega
// .create wala kaam   ~const user = Object.create(createUser.prototype);~  , this khud kerlega.
//inshort new keyword prototype ko khud assign kerdega proto ke