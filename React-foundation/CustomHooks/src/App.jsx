import { useState } from "react"


function useCounter(){
  const [count, setCount] = useState(0);

  function IncreaseCount(){
    setCount(count+1);
  }
  return {count:count,
    IncreaseCount:IncreaseCount}
}

function App(){

  return <div>
    <Counter/>
  </div>
}

function Counter(){
  const {count, IncreaseCount} = useCounter()
  return <div>
    <button onClick={IncreaseCount}>Increase {count}</button>
  </div>
}

export default App;