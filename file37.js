//difference between dot and bracket notation
const person ={name:"Harshit" , age:22 , "fav things":["dancing","sleeping","eating"]}
// console.log(person["fav things"]);
// console.log(person.name);


//how to iterate arrays with loops
//for in loop
//object.keys

// for (let key in person)
// {console.log(person[key])};
// {console.log(key,":" , person[key])};
//using template string {console.log(`${key}:${person[key]}`);}


// console.log(Object.keys(person));
for (let key of Object.keys(person))
{console.log(person[key]);}