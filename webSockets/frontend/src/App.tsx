import { use, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latestMessage, setLatestMessage] = useState<string>("");
  const [message, setMessage] = useState("")

  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080') //socket var will store websocket instance for future communication with the server by client(react code)
    socket.onopen = ()=>{
      console.log('Connected')
      setSocket(socket)
    }

    socket.onmessage = (message) => {
      console.log('Recieved message:', message.data)
      setLatestMessage(message.data)
    }

  })



  if(!socket){
    return <div>
      Loading...
    </div>
  }



  return (
    <div>
      <input type="text" onChange={(e)=>{setMessage(e.target.value)}}/>
      <button onClick={()=>{socket.send(message)}}>Send</button>
      {latestMessage}
    </div>
  )
}

export default App
