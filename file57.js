//map function
const arr = [3,4,6,1,8,];
// const square=function(number){
//     return number*number;
// }
// const squareNum =arr.map(square);
// console.log(squareNum);

//another way
const squareNum1 =arr.map(function(square){
    return square*square;
});
console.log(squareNum1);

//by array function
const squareNum3 =arr.map((number,index) => {
    return `index:${index} , ${number*number}`;
});
console.log(squareNum3);
