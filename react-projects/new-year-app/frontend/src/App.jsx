import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  async function onComplete(id){
    await fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "content-Type":"application/json"
      }
    })
  }




  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then((async (res)=>{
    const json = await res.json();
    setTodos(json.todos);
  }))
  }, [todos])
 
  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos} onComplete={onComplete}/>
    </div>
  )
}

export default App
