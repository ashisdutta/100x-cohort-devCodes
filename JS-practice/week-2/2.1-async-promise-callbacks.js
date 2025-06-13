//          lets print hi there usng useCallback, promise, Async/await syntex

// function ashAsyncfunction(callback){
//     callback("hi there");
// }

// async function main(){
//     ashAsyncfunction(function(value){
//         console.log(value);
//     })
// }

// main();


// //                  Promise(then) syntex
// function ashAsyncfunction(){
//     let p = new Promise(function(resolve){
//         resolve("hi there");
//     })
//     return p;
// }

// function main(){
//     ashAsyncfunction().then(function(value){
//         console.log(value);
//     })
// }

// main();


//          Async await syntax

function ashAsyncfunction(){
    let p = new Promise(function(resolve){
        resolve("hi there!");
    });
    return p;
}

async function main() {
    const value = await ashAsyncfunction();
    console.log(value);
}

main();
