import { useEffect, useState } from "react";

function App4(){
    const [currentTab, setCurrentTab] = useState(1);
    const [tabData, settabData] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(function(){
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos/'+currentTab)
        .then(async res=>{
            const json = await res.json();
            settabData(json);
            setLoading(false);
        })
    }, [currentTab])


    return <div>

        <button onClick={()=>{setCurrentTab(1)}} style={{color: currentTab==1 ? "red" : "black"}}>todo #1</button>
        <button onClick={()=>{setCurrentTab(2)}} style={{color: currentTab==2 ? "red" : "black"}}>todo #2</button>
        <button onClick={()=>{setCurrentTab(3)}} style={{color: currentTab==3 ? "red" : "black"}}>todo #3</button>
        <button onClick={()=>{setCurrentTab(4)}} style={{color: currentTab==4 ? "red" : "black"}}>todo #4</button>
        <br />
        {loading==true? "Loading....":tabData.title}
    </div>
}

export default App4;