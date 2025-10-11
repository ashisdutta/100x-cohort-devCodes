import Card from "./components/Card"
import { useState } from "react"
import "./App.css"
import { useRef } from "react"
function App(){
  const [name, setName] = useState("ashisdutta")
  const userInput = useRef();
  return <div className="App-box">
    <div className="input-div">
      <input type="text"
      placeholder="Enter the Name"
      ref={userInput}
      />
      <button onClick={()=>{setName(userInput.current.value)}}>Generate</button>
    </div>
      
    <div className="card-div">
      <Card name={name}/>
    </div>
  </div>
}

export default App;