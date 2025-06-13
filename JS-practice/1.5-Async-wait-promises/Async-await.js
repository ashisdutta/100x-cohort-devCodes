function AshsAsyncFun(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there!");
        }, 3000);     
    });
    return p;
}


async function main(){
    const value = await AshsAsyncFun();
    console.log(value);
}

console.log("ddvd");

main();
    
