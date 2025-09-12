import { useState, useEffect, memo} from "react";

function App(){
    const [count, setCount]= useState(0)

    
  return <div>
    <Count count= {count} setCount= {setCount}/>
    <CountIncrease/>
    <CountDecrease/>
  </div>
}

const Count = memo(function ({count, setCount}){


  useEffect(()=>{
    setInterval(()=>setCount(c=>c+1), 3000)
  },[])
  return <div>
    <button>{count}</button>
  </div>
})

const CountIncrease = memo(function (){
  return <div>
    <button>Increase</button>
  </div>
})

const CountDecrease = memo(function (){
  return <div>
    <button>Decrease</button>
  </div>
})

export default App;
