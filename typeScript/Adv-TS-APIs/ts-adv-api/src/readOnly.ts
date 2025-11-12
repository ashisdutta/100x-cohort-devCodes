type User = {
    readonly name: string,
    readonly age:number
}

const user:User = {
    name:"eheh",
    age:21
}
//user.name = "asd"

// -------  or --------
type setUser = {
    name: string,
    email: string
}

const setuser:Readonly<setUser> = {
    name: "AAA",
    email:"ash@gmail.com"
}
//setuser.email="sdvns";