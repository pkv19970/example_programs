class Person{
    constructor(name){
        this.name = name;
    }
    greet=()=>{
        console.log('My name is '+ this.name);
    }
}

class Max extends Person{
    constructor(age){
        super('Max');
        this.age = age;
    }
}

max = new Max(27);
Object.setPrototypeOf(Max,Person.prototype);
console.log(max.prototype === Person.prototype);