const fs = require("fs");

function AshisReadFile(){
    return new Promise(function(resolve){
        fs.readFile("/Users/ashisdutta/cohort3/JS-practice/1.5-Async-wait-promises/a.JSON", "utf-8", function(err, data){
            resolve(data);
        })
    })
}


function fn(arg){
    console.log(arg);
}

AshisReadFile().then(fn);