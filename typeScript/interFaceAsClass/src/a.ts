interface Person{
    name: string;
    age: number;
    greet(phrase:string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a:number){
        this.name=n;
        this.age=a;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("Ash", 20)
console.log(e.greet('Hi there'));

