import { useState } from 'react'

function App(){
  return (
    <div>
      <ToggleMessage/>
    </div>
  )
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  function toggle() {
    setIsVisible(!isVisible);
  }



  return (
    <div>
      <button onClick={toggle}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  )
}


export default App
