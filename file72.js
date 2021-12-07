//call , bind , apply //arrow function kam nhi karega
function about(hobby,favmusician){
    console.log(this.firstName , this.age , hobby , favmusician);

}
const user1 ={
    firstName: "harshit",
    age: 8,
    
}

const user2 = {
    firstName: "vrikshit",
    age: 10,
    
}
//call
// user1.about.call(user2); //yahan user 1 ko call  kerke uske this main user2 ke contraints parse hore hain sidha
about.call(user2 , "guitar" , "weeknd"); //yahan user 1 ko call  kerke uske this main user2 ke contraints parse hore hain sidha

//apply
about.apply(user2 , ["tabla" , "weeknd"]);

//bind
const func = about.bind(user2 , "drums" , "doja-cat"); 
func();