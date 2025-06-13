// anuj bhiya

const calculate = (a, b, operation) => {
    return operation(a,b);
}

// method 1
const addition = calculate(3,4, function (num1, num2){        // anonamous function
    return num1+num2;
});

console.log(addition);

// method 2

const subtraction = (a,b) => a-b;                             // arrow fn
const subResult = calculate(4,1, subtraction);
console.log(subResult);

// method 3

function multiply(a,b) {
    return a*b;
}
const mulResult = calculate(2,2, multiply);
console.log(mulResult);


