const obj1 = {
    key1: "value1",
    key2: "value2",
}
const obj2 = Object.create(obj1); //yeah khali object hai
    //ab yahah javascript khud obj1 mian dhundega key2 kyunki obj2 main yeah nhi hai
    //there is one more way to create empty object
    // key3: "value3"
// ager javascript ko ager obj2 main key pair nhi mila to wo ek prototype bnata hai jismain wo object ka reference save kerta hai

console.log(obj2.key2);