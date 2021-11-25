//functions returning function
function myFunc(a){
    // console.log(a);
    console.log("inside myfunc1");
}
myFunc(myFunc1);

function myFunc1(){
        console.log("hey")
}
myFunc1(myFunc);
//another example
function myFunc11(){
    function hello(){
        return "hello world"
    }
    return hello;
}
const ans = myFunc11();
console.log(ans());