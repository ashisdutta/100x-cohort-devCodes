interface User{
    name: string,
    age: number
}

function sumofAge(user1: User, user2:User){
    return user1.age+user2.age; 
}

const age :number = sumofAge({name:"Ash", age:20}, {name:"Tutu", age:30});
console.log(age);