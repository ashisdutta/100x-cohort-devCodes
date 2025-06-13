// push

function pushExample(arr, element){
    console.log("Before:", arr);
    arr.push(element);
    console.log("After:", arr);
}

pushExample([3,4,6,8,5], 66);


// pop
function popExample(arr){
    console.log("before:", arr);
    arr.pop();
    console.log(arr);
}

popExample([2,3,4,5]);

// shift--> pop() from front

const initialArray = [1,2,3];
initialArray.shift();
console.log(initialArray);

// unshift()
// function unshiftExample(arr, element) {
//   console.log("Original Array:", arr);

//   arr.unshift(element);
//   console.log("After unshift:", arr);
// }
// unshiftExample([1, 2, 3], 0);

const arr = [2,4,5,3,65];
arr.unshift(6);
console.log(arr);

//concat()

const myArray = [1,2,3,4];
const my2ndarray = [5,6,7,8];

let arr3 = my2ndarray.concat(myArray);
console.log(arr3);



// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(i) {
    console.log(i);
  });
}
forEachExample([1, 2, 3]);


const myArr = [1,2,3];
myArr.forEach((item)=>{console.log(item)});


// find()

const a = [4,5,7,8,5,23,-3,-4];

const firstNag = (num) => {
    return num<0;
}

const result1 = a.find(firstNag);
console.log(result1);

const result2 = a.findIndex(firstNag);
console.log(result2);

// forEach()

const result3 =a.forEach((num) => {
    console.log(num*3)
});

result3;

