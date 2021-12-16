//arrow functions
//arroww function ka khud ka this nhi hota, surrrounding se leta hai
const user1 ={
    firstName: "harshit",
    age: 21,
    about: ()=>{
        // console.log(this);
        //yahan per this se age aur firstName call nhi hoga yahan ke liye this window hai;
    }
}
user1.about(user1);
console.log(this.firstName,this.age);