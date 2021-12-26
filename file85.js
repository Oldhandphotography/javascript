//getter and setter functions
class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    //get use kerne se function property ke tarah use ho skta hai
    get fullName(){
        return `${this.firstname} ${this.lastname} `
    }
    //setName can change the passed value of "const person1= new Person("harshit","sharma",5)" to "person1.setName("mohit","khanna");" => harshit sharma to mohit khanna 
    setName(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
const person1 = new Person("harshit","sharma",5);
// console.log(person1.fullName);
// person1.setName("mohit","khanna");
console.log(person1.firstName);
console.log(person1.lastName);
