import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [loading , setloading] = useState(true);
  const [data, setData] = useState({
    name:"",
    email:"",
  });


  useEffect(()=>{
    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    .then(res=>{
      setloading(false);
      setData(res.data);
    })
  }, [])

  if(loading){
    return <div>
      loading...
    </div>
  }

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  )
}

export default App
