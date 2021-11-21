//spread operator
const arr1 =[1,2,3];
const arr2 =[5,6,7];
 const newarr =[...arr1 ,...arr2];
 const newarr1 =[..."abc"];// this will not print abc , it will print "a" , "b" , "c"
 const newarr12 ={...["abc"]};// this will not print abc , it will print "a" , "b" , "c"
 console.log(newarr);//strings and array are iterable not numbers.
 console.log(newarr1);
 console.log(newarr12);
 