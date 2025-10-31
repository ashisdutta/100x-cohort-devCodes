function identity(arg: number | string){
    return arg;
}

let output1 = identity("Ash");
let output2 = identity(60);

//output1.toUpperCase().     Does't work

// using Generics we can work this out

function GenIdentity<T>(arg: T){
    return arg;
}
let gen1 = GenIdentity<string>("sssses");
console.log(gen1.toUpperCase()); // here we can apply inbuild functions on variable of specific type.

let gen2 = GenIdentity(44); // if don't give type tag, it will automatically grab the variable type.
console.log(gen2)
