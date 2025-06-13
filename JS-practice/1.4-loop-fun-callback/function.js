// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function sumOfSquares(a,b){
//     const val1 = square(a);
//     const val2 = square(b);

//     return val1+val2;
// }

// function sumOfCube(a,b){
//     const val1 = cube(a);
//     const val2 = cube(b);

//     return val1+val2;
// }


// console.log(sumOfSquares(2,2));
// console.log(sumOfCube(2,2));



// using callbacks

function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSomething(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);

    return val1+val2;
}

console.log(sumOfSomething(3,4, cube));  