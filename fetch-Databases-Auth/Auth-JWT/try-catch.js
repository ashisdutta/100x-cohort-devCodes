function getLength(name){
    return name.length;
}

// const ans = getLength() // i haven't pass the name value, so value will be undefined
// console.log(ans);

// console.log("hi there") // control never reaches here, here this will not print


try {
    const ans = getLength();
    console.log(ans);
} catch(e){
    console.log("error occured");
}

//-------------------  try - catch --------------

try{
    let a;
    console.log(a.length);
    console.log("hi there, from inside");
} catch(e){
    console.log("inside catch statement");
}

console.log("hi there");

