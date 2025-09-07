import { useContext } from "react";
import { useState, createContext} from "react";

const BulbContext = createContext();


function BulbProvider({children}){
    const [isLightOn, setIsLightOn] = useState(true);
    
    return <BulbContext.Provider value={{isLightOn:isLightOn,setIsLightOn:setIsLightOn}}>
      {children}
    </BulbContext.Provider>
}


function App2(){
  
  return <div>
    <BulbProvider>
        <Light/>
    </BulbProvider>
  </div>
}

function Light(){
  
  return <div>
    <LightBulb />
    <LightSwitch/>
  </div>
}

function LightBulb(){
  const {isLightOn} = useContext(BulbContext)
  return <div>
    {isLightOn? "light On":"light Of"}
  </div>
}

function LightSwitch(){
  const {isLightOn, setIsLightOn} = useContext(BulbContext);

  function ToggleLight(){
    setIsLightOn(!isLightOn)
  }
  return <div>
    <button onClick={ToggleLight}>Switch</button>
  </div>
}

export default App2;