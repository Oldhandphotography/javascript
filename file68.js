//maps
//maps is ana iterable
//stores data in ordered fashion
//stores key vale pairs (like object)
//duplicate objects are not allowed like objects 
//diference between maps and objects is//objects can only have strings or symbol as key
//inn maps you can only have anything as key like array , number, string...
const person = new Map();
person.set('firstname' , 'harshit');
person.set('midname' , 'kumar');
person.set('lastname' , 'singh');

//cant access like this
// console.log(person);
// console.log(person['firstname']);


console.log(person.get('firstname'));
console.log(person.keys());
for (let key of person.keys()){
    console.log(key , typeof key);
}