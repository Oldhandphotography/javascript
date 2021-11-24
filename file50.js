//block scope vs function scope
//let and const are block scope 
//var is function scoipe
{
let firstName ="harshitr"; 
console.log(firstName) // this can access here
}
// console.log(firstName) // this will not access here

{
var firstName = "sopuvik";
// console.log(firstName)
//this can access anywhere
}
//this can even access from here console.log(firstName)+;