//filter method
const nums = [1,3,4,5,6,7,8,9]
const isEven = nums.filter((num) => {
    return num%2===0;
});
console.log(isEven);