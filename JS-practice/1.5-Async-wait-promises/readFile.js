// const fs = require("fs");

// fs.readFile("/Users/ashisdutta/cohort3/JS-practice/1.5-Async-wait-promises/a.JSON", "u tf-8", function (err, data){
//     console.log(data);
// })

// console.log("Hi there!");


const fs = require("fs");

// my own async function
function ashsReadFile(callback){
    fs.readFile("/Users/ashisdutta/cohort3/JS-practice/1.5-Async-wait-promises/a.JSON","utf-8", function(err, data){
        callback(data);
    })
}

// callback function to call
function onDone(arg){
    console.log(arg);
}

ashsReadFile(onDone);


