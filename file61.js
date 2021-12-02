// //find method
// const arr = ["hello" , "cat" , "dog" , "lion"];
// function isLength3(string){
//     return string.length === 3;
// }
//  arr.find(isLength3);
//  //only return first occurence , check all elemnets for that

const users = [
    {userId : 1 , userName : "somhit"},
    {userId : 2 , userName : "halhit"},
    {userId : 3 , userName : "holadhit"},
    {userId : 4 , userName : "vrikrshit"},
    {userId : 5 , userName : "charshit"},
    {userId : 6 , userName : "varshit"}
];
const myUser = users.find((user)=>user.userId===3);
console.log(myUser);