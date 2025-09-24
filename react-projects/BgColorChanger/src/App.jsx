import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState(null);

  return (

    <div className='body-class' style={{background:color}}>
      <div className='color-bar'>
        <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
      </div>
    </div>
  )
}

export default App
