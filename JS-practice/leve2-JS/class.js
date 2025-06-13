// const dog = {
//     name: "doggie",
//     legCount: 4,
//     speaks: "bhow bhow"
// }

// const cat = {
//     name:"pussy",
//     legCount: 4,
//     speaks: "meow"
// }

// function printStr(animal){
//     console.log("animal "+ animal["name"]+ " " + animal["speaks"]);
// }

// printStr(dog);
// printStr(cat);


class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("We are animals");
    }
    speak(){
        console.log("hi there, ", this.speaks);
    }
}

let dog = new Animal("Dog", 4, "bhow bhow");// create object
let cat = new Animal("cat", 4, "meow meow");

cat.speak();
dog.speak();

Animal.myType();

