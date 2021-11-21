// //functions
// function wish(){
//     console.log("happy birthday souvik");
//     console.log(2+4);
// }
// // wish();
// function sum(a,b)
// {
//     c=a+b;
//     return c;
//     // let +sum1=prompt
// }
// let addition = sum(4,5);
// console.log(addition);
function findTarget(array,target)
{
    for(let i=0;i<array.length;i++){
        if( array[i]===target) ;
        return i;
    }
    return -1;
}
const myArr = [1,3,8,40]
const exc=findTarget(myArr,100);
console.log(exc);