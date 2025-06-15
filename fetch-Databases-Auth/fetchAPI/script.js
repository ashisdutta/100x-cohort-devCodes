
// using promise
// function getAnimalData(){
//     fetch("https://fakerapi.it/api/v1/persons")
//     .then(function(response){
//         response.json()
//         .then(function(res){
//             console.log(res);
//         })
//     })
// }

// using async await

async function getAnimalData(){
    const response = await fetch("https://fakerapi.it/api/v1/persons")
    const finalData = await response.json();
    console.log(finalData);
}
