//short hand notation or short syntax
const user1 = {
    firstName: "harshit",
    age: 21,
    about: ()=>{
        // console.log(this);
        console.log(this.firstName,this.age);
        //yahan per this se age aur firstName call nhi hoga yahan ke liye this window hai;
    }
}


// about:()=>{} ,isko aise to likh hi sakte per isko aise bhi likha jaa sakta hai jaise niche likhra hun
const user = {
    firstName: "harshit",
    age: 21,
    about()
        {console.log(this.firstName,this.age);}
    
}