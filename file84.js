class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){return this.age <= 1;}
    isCute(){return true;}
}
class dog extends Animal{
    //super class
    constructor (name, age, speed){
        super(name, age );
        this.speed = speed;
    }
}
//yahan dog main koi constructor nhi hai to parent se lega which is Animal ya check karega in animal if missing in dog
const tomy= new dog("tommy",3,45);
console.log(tomy.isCute());
// const animal1 = new Animal("tom",2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());