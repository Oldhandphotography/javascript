 //sets (its iterabl)
//stores data and have its own methods
//no index based access and order is not alos guarrentied 
// no duplicates allowed

// const numbers =new Set([1,2,3,4,5]);//syntax to make a set
//its a set of array
//for set no duplicasy allowed 
// numbers[2];// its not possible

// const num = new Set("a","b","c");//syntax to make a set



// const nums= new Set();

// nums.add(1);
// nums.add(['a','b']);//this is same as below
// nums.add(['a','b']);//this is same as above with respect to javascripts concepts.
// if(numbers.has(1)){
//     //another was to check something | ===
// } 
// console.log(nums)
 
//unique array ko print karre
const array= [1,2,3,4,5,3,7,8,9,5,6,7,8,9];
const unique_ele = new Set(array);
console.log(unique_ele)
console.log(array)