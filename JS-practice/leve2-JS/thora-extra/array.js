// array

const myArr =  [0, 1, 2, 3, 4, 5];
const myHeros = ["spiderMan", "Superman", "Thor"];
const myArr2 = new Array(1,2,3,4);

console.log(myArr[1]);

// Array methods

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.includes(3));

const newArr = myArr.join();
console.log(newArr);
console.log(myArr);


//     slice, splice
const sliceArr = myArr.slice(1,3);
console.log(sliceArr);
console.log("original arr:", myArr);


const spliceArr = myArr.splice(1,3);
console.log(spliceArr);
console.log("original after splice:", myArr);

