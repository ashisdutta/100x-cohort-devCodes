// Given an array of positive integers as input, return the maximum value in the array
// type numberArr = number[]


// function maxNum(arr: numberArr){
//     let max= 0;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(maxNum([1,2,3,4]))


//.      Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface user{
    name: string,
    age:number
}

function legal(users: user[]){
    const legalUsers = users.filter(e=>e.age>18)
    console.log(legalUsers)
}


legal([{name:"Ash", age: 20},{name:"puja", age: 17}])