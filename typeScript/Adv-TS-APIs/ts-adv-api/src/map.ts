//Map-> represents a collection of key-value pairs where both the keys and values can be of any type
type User = {
    name: string;
    age: number;
    email:string
}

//we can use set, get func. here

const users = new Map<string, User>()
users.set("ash@1", {name:"asg", age:40, email:"vdi@gmail.com"})
users.set("ash@1", {name:"ghee", age:30, email:"skne@gmail.com"})

const user = users.get("ash@1")
console.log(user);