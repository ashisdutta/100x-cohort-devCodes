interface User{
    name:string,
    email:string,
    password:string,
    createdAt:Date,
    age:number
}

type UpdateProps = Pick<User, 'name' | 'age' | 'password'> //Pick
type UpdatePropsOptional = Partial<UpdateProps> //Partial

function updateUser(updatedProps: UpdatePropsOptional){
    console.log(`name: ${updatedProps.name}, age: ${updatedProps.age} and password:${updatedProps.password}`)
}

updateUser({name:"Asf", age:20, password:"skhevbe"})