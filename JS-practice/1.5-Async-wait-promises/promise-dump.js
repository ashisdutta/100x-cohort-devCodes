//                        just like  Date class
// let data = new Date();
// console.log("secs from 1970 to now:", data.getTime());


let p = new Promise(function(resolve){
    setTimeout(function(){
        resolve("hi Ash");
    }, 2000);
})

function callback(data){
    console.log(data);
}
console.log(p);
p.then(callback);


// function ashPromiseFun(){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve, 2000);
//     });
//     return p;
// }

// const value = ashPromiseFun();
// value.then(function(){
//     console.log("beautiful");
// });