// () => expression 

// (parameter1, parameter2) => expression 

// () => {
//     statements
// }

// (parameter1, parameter2) => {
// }

function greet1(){
    console.log("hello world");
}
greet1();

const greet2 = () => {
    console.log("hello world");
}
greet2();

const greet3 = (count) => {
    for (let i=0; i< count; i++){
        console.log("helll nooooo");
    }
}
greet3(4);

const square = (num) => console.log(num*num);
square(3);