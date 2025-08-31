function KeyApp(){

    const todos=[{
        title:"go to gym",
        done:false
    },{
        title:"Eat food",
        done:true
    }]

    return <div>
        {todos.map((todo, index)=>{
            return <Todo title={todo.title} done={todo.done} key={index}/>
        })}
    </div>


}

function Todo({title, done}){
    return <div>
        {title}-{done?"Done": "Not Done"}
    </div>
}

export default KeyApp;