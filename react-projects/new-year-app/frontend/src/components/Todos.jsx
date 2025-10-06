import { useEffect, useState } from "react"

export function Todos({todos}) {
    return <div>
        {todos.map(function(todo){
            return <div key={todo.title}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>{
                    useEffect(()=>{

                    })
                }}>{todo.completed == true ? "completed": "Mark as Complete"}</button>
            </div>
        })}
    </div>
}