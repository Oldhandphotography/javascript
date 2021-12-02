// //every method
// const numbers = [2,4,6,8,10];
// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);
const users = [
    {userId : 1 , userName : "somhit"},
    {userId : 2 , userName : "halhit"},
    {userId : 3 , userName : "holadhit"},
    {userId : 4 , userName : "vrikrshit"},
    {userId : 5 , userName : "charshit"},
    {userId : 6 , userName : "varshit"}
];

const ans = users.every((userName)=>userName.length===15);
console.log(ans);