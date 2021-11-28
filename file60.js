//sort method
const Nums= [5,66,777,8888,99999,100000,33,5544,3322,6677,9000,10000]
const sorting= Nums.sort((num,num1)=>{
    //for acceending order 
    return num-num1;   
    //for desending order return num1-num; 
});
console.log(sorting);