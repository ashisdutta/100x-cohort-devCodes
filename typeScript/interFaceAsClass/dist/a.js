"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("Ash", 20);
console.log(e.greet('Hi there'));
//# sourceMappingURL=a.js.map