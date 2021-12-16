// //yeah ek object bna liya
// const userMethods1 = {
//     about : function() {return `${this.firstName} ${this.lastName} is ${this.age} years old`},
//     is18 : function()  {return this.age >= 18;}
// }
function createUser(firstName, lastName , email , age , address) {
    //create set the value of proto aur proto ke value ab set karenge prototype ko
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    // user.about = userMethod1.about;
    // user.is18 = userMethod1.is18;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.sing = function(){
    return "la lalalala la";
}
const user1 = createUser('harshit' , 'vashisht1' , 'harshit@gmail.com' , 23 , 'my address');
const user2 = createUser('rakshit' , 'vashisht2' , 'harshit@gmail.com' , 20 , 'my address');
const user3 = createUser('harkulas' , 'vashisht3' , 'harshit@gmail.com' , 13 , 'my address');
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());



//yeah optimise nhi hai aur baar baar objects aur methods bnege ager yeh jyada  baar hua to memory shortage ho jayegi