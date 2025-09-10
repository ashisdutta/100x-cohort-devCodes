import { useState } from "react";
import { usePrev } from "./hooks/usePrev";


function App(){
  const [count, setCount] = useState(0);
  const prev = usePrev(count);

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{setCount(c=>c+1)}}>click me</button>
      <p>the previous value was {prev}</p>
    </div>
  )
}

export default App;
