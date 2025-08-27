import { useState } from "react";

function App(){
  const [count, setCount] = useState(1)

  return <div>
    <BallIcon count={count} setCount={setCount}/>
  </div>
}

function BallIcon(props){
  function addNo(){
    
    props.setCount(props.count+1);
  }
  
  
  return (
    <div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>
          <div style={{backgroundColor:"red", borderRadius:15, width:20}}>
          {props.count}
        </div>
        <img src="data:image/png;base64,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"
          width={30}
          style={{ cursor: "pointer" }}
        />
        <button onClick={addNo}>Add notification</button>
        </div>
      </div>
    </div>
  )
}





export default App