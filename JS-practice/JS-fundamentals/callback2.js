// function calculateArithmatic(a, b, arithmaticFinalFunction) {
//     return arithmaticFinalFunction(a,b);
// }

// function sum(a, b) {
//     return a+b;
// }

// const value = calculateArithmatic(4,5, sum);
// console.log(value);



// setTimeout fn

function greet(){
    console.log("Hello World");
}

function greetAlien(){
    console.log("hi Alien");
}
setTimeout(greet, 2*1000);

setInterval(greetAlien, 2*1000);

