import { useState } from "react";

function App(){

  return <div>
    <Light/>
  </div>
}

function Light(){
  const [isLightOn, setIsLightOn] = useState(true);
  return <div>
    <LightBulb isLightOn= {isLightOn}/>
    <LightSwitch setIsLightOn = {setIsLightOn} isLightOn = {isLightOn}/>
  </div>
}

function LightBulb({isLightOn}){

  return <div>
    {isLightOn? "light On":"light Of"}
  </div>
}

function LightSwitch({isLightOn,setIsLightOn}){


  function ToggleLight(){
    setIsLightOn(!isLightOn)
  }
  return <div>
    <button onClick={ToggleLight}>Switch</button>
  </div>
}

export default App;