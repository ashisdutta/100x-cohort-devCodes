import {useState, useRef} from "react";

function StopWatch(){
    const [count, setCount] = useState(0);
    const getuseRef = useRef();


    function startWatch(){
        let value = setInterval(function(){
            setCount(c=>c+1);
        }, 1000)
        getuseRef.current = value;
    }

    function stopWatch(){
        clearInterval(getuseRef.current)
    }

    return <div>
        {count}
        <br />
        <button onClick={startWatch}>Start</button>
        <button onClick={stopWatch}>Stop</button>
    </div>
}

export default StopWatch;