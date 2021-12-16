// //proto , prottype , class some oops concepts
// const user = {
//     firstName: 'John',
//     lastName: 'wick',
//     email: 'johnwick@example.com',
//     age: 26,
//     address: 'dlf , uttar-pradesh',
//     about()
//     {return '${this.firstName} ${this.lastName} is ${this.age} years old';},
//     is18()
//     {return this.age >= 18;}
// }
//function (that function create object)
//add key value pair 
//object ko return karayega


//yeah ek object bna liya
const userMethod = {
    about : function() {return `${this.firstName} ${this.lastName} is ${this.age} years old`},
    is18 : function()  {return this.age >= 18;}
}
function createUser(firstName, lastName , email , age , address) {
    const user = Object.create(userMethod); //yahan se usemethod main jinte merzi function call kerlo sab aajayenge alag se neche call kerne ki jarurat nhi pdegi. sirf yeah aklee line empty object bnaere hai aur sath main __proto__ ke nthrough sare referencee bhi call kereke hai userMethod se.
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}
const user1 = createUser('harshit' , 'vashisht1' , 'harshit@gmail.com' , 23 , 'my address');
const user2 = createUser('rakshit' , 'vashisht2' , 'harshit@gmail.com' , 20 , 'my address');
const user3 = createUser('harkulas' , 'vashisht3' , 'harshit@gmail.com' , 13 , 'my address');
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);


//yeah optimise nhi hai aur baar baar objects aur methods bnege ager yeh jyada  baar hua to memory shortage ho jayegi

