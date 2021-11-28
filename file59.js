//reduce
const nums = [2,4,5,7,8,9,0,10]
const arr = nums.reduce((accum,currVal)=>{
    return accum*currVal;
});
console.log(arr);  