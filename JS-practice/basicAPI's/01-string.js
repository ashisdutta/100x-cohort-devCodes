function getLength(str){
    console.log("original String:", str);
    console.log("Length:", str.length);
}

getLength("Ashis");

//    indexOf(target)

// const str = "Ashis Dutta";
// console.log(str.indexOf("Dutta"));

function findIndexOf(str, target){
    console.log("original string:", str);
    console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello world", "world");


//  lastIndexOf()


function findLastIndexOf(str, target){
    console.log("orginal String:",str);
    console.log("Last Index:", str.lastIndexOf(target));
}

findLastIndexOf("world world world", "world");


//slice()

// const strr = "world is green";
// console.log(strr.slice(0,5));

function findSlice(str, start, end){
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
}

findSlice("Ashis", 2,4);

// replace()

function getReplace(str, target, replacement){
    console.log("string:", str);
    console.log("After:", str.replace(target, replacement));
}

getReplace("Ashis Dutta", "Dutta", "Singha");



//        split
function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
}
splitString("Hello World", "W");

const value = "my name is ashis dutta";
const words =value.split(" ");

console.log(words);


// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World      ");

//toUpperCase

function toUpper(str){
    console.log("before String:", str);
    console.log("after String:", str.toUpperCase());
}

toUpper("dfbdj");

//toLowerCase

const Value = "VDKVDVLS";
const newValue = Value.toLowerCase();
console.log(newValue);
