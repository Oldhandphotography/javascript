//higher order function = function in function ya callback function in function main



//import array methods 
//forEach
//map
//filter
//reduce
const numbers = [4,2,5,8];
// function mul(num,index){
//     console.log(`index of number ${num} is ${index}` );
//     console.log("multiply by 2 is:",num*2);
// }
// for (let i=0; i<numbers.length;i++){
//     mul(numbers[i],i);
// }


//forEach()
numbers.forEach(function(num,index){
    console.log(`index of number ${num} is ${index}` );
    console.log("multiply by 2 is:",num*2);
})
;
numbers.forEach(function(num){
    
    {console.log(`numbers ${num} if giving reminder or not : ${num%2}`)}
}); 

// or using arrow function
numbers.forEach((num,index)=>{
    {console.log(`numbers ${num} if giving reminder or not : ${num+5}`)}
 
});
