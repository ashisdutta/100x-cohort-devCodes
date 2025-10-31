import './App.css'

function App() {
  return <div>
    <Todo title="my todo 1" description="svnrrejererj" done={true} />
  </div>
}


interface TodoProp{
  title: string,
  description: string,
  done: boolean
}


function Todo(props: TodoProp){
  return <div>
    <h1>{props.title}</h1>
    <h2>
      {props.description}
    </h2>
  </div>
}

export default App