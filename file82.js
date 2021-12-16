//yeah ek object bna liya
userMethods = {
    about : function() {return `${this.firstName} ${this.lastName} is ${this.age} years old`},
    is18 : function()  {return this.age >= 18;}
}
function createUser(firstName, lastName , email , age , address) {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}
 user1 = createUser('harshit' , 'vashisht1' , 'harshit@gmail.com' , 23 , 'my address');
 user2 = createUser('rakshit' , 'vashisht2' , 'harshit@gmail.com' , 20 , 'my address');
 user3 = createUser('harkulas' , 'vashisht3' , 'harshit@gmail.com' , 13 , 'my address');
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());



//yeah optimise nhi hai aur baar baar objects aur methods bnege ager yeh jyada  baar hua to memory shortage ho jayegi