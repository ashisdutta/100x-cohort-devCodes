/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n, fn) {

    const beforeFn = new Date();
    let beforetime = beforeFn.getTime();

    fn(n);

    const AfterFn = new Date();
    let afterTime = AfterFn.getTime();

    let timeTaken = (afterTime-beforetime)/1000;
    return timeTaken;
}


function CalculateSum(n) {
    let sum =0;
    for( let i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
}


console.log(calculateTime(100, CalculateSum));
console.log(calculateTime(100000, CalculateSum));
console.log(calculateTime(1000000000, CalculateSum));