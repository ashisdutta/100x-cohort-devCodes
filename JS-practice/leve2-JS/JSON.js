// JSON.parse
// JSON.stringify

const user = {
    name: "Sweta",
    age : 23,
    gender :"MAAL"
}

const finalString = JSON.stringify(user);
console.log(finalString);


const finalObject  = JSON.parse(finalString);
console.log(finalObject);

