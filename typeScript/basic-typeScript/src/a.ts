// const x: number = 1;
// console.log(x);

// function greet(firstName:string){
//     console.log("hello" + firstName)
// }

// greet("Ash")


// function sum(a:number, b:number):number{
//     return a+b;
// }

// const value = sum(1,2)
// console.log(value); 

// function isLegal(age:number):boolean{
//     if(age>18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// Create a function that takes another function as input, and runs it after 1 second.

// function RunAfter1Sec(fn: ()=>void){
//     setTimeout(fn, 1000);
// }

// RunAfter1Sec(()=>{console.log("hello world")})


// Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

interface User{
    firstName: string,
    lastName: string,
    age: number,
    email?:string // it's optional if you want to add it or not
};

function isLegal(user: User){
    if(user.age > 18){
        return true;
    }
    else{
        return false;
    }
}


isLegal({
    firstName:"Ash",
    lastName:"dutta",
    age:24
})

