import { useEffect, useState } from "react"

export function Todos({todos, onComplete}) {
    return <div>
        {todos.map(function(todo){
            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>{
                    onComplete(todo._id);
                }}>{todo.completed == true ? "completed": "Mark as Complete"}</button>
            </div>
        })}
    </div>
}