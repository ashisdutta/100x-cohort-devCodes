type UsersAge = {
    [key: string]:number;  //very complex looking
}

const users: UsersAge = {
    "ras@qd1": 21,
    "ras1dr@":33
}
console.log(users);

//--------------------------------------
// using Record
type UsersAge2 = Record<string, number> //<key-type, value-type>

const users2:UsersAge2 = {
    "dhesj@1": 34,
    "bvnw@3": 20
}

console.log(users2);