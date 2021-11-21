//lexical scope
const myVar = "vaalue 59";
function myFunc1() {
    const myVar = "value1";
    function myFunc(){
        // const myFunc(){
            console.log("inside myFunc",myVar);
        }
    // }
    // const myFunc2 = function(){}
    // const myFunc3 = () => {}
    console.log(myVar);
    myFunc();
    }
    myFunc1();