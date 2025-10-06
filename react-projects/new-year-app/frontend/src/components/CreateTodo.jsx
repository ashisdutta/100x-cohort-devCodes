import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
            <input type="text" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="text" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}}/>
            <button 
            onClick={()=>{
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "content-Type":"application/json"
                    }
                })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added")
                })
            }}
            >Add todo</button>
        </div>
}