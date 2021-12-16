//prototype ek object hai yani muft ka space jisko hm use ker sakte hai jaise key value pair add ker sakte hain
//only funcutions provide prototype property

function hello(){}
// our own property added
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing= () => {return "lallalla" ;};
console.log(hello.prototype.sing());
console.log(hello.name);
// .name property function ka nam btate hai