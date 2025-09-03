import { useRef } from "react";


function App(){
  const inputRef = useRef();


  function focusOnInput(){
    // document.getElelmentById("name").focus()
    inputRef.current.focus()
  }

  return <div>
    Signup
    <input ref={inputRef} type="text" id="name"/>
    <input type="text" />
    <button onClick={focusOnInput}>Submit</button>
  </div>
}

export default App;