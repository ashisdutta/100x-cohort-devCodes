import { useState, useEffect } from "react";

function App5(){
    const [showTimer, setShowTimer] = useState(true);


    useEffect(function(){
        setInterval(function(){
            setShowTimer(value=>!value)
        }, 5000)
    }, [])

    return <div>
        {showTimer && <Timer/>}
    </div>
}

const Timer = function(){
    const [second, setSecond] = useState(0);
    console.log("hi")
    useEffect(function(){
        setInterval(()=>{
            setSecond(count=>count+1)
        },1000)

        return function(){
            clearInterval(Timer)
        }
    }, [])



    return <div>
        {second} second elasped
    </div>
}

export default App5;