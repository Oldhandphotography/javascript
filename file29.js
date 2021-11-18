console.log("hey buddy are you there");
// let a=prompt("hey buddy are you there");
//.concat() combine two strings
// //... is spread operator
// let array1=["items","items-1"];
// let c=["abs","abs-1","abs-2"];
// // let b=["items-3","items-2"];
// c = [].concat(array1,c);
// console.log(c);



//spread operator
let array3=["items","items-1"];
let array4=["items","items-1"];
// let array0= [...array3,"items","items-1"];
let array0= [...array3, ...array4];
console.log(array0);