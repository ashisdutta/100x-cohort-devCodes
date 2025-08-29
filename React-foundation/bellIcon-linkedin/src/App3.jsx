import { useState } from "react";

function App3() {
    const [currentTab, setCurrentTab] = useState("feed");

    return <div>
        <button onClick={()=>{setCurrentTab("feed")}} style={{color: currentTab=="feed" ? "red" : "black"}}>Feed</button>
        <button onClick={()=>{setCurrentTab("notification")}} style={{color: currentTab=="notification" ? "red" : "black"}}>Notification</button>
        <button onClick={()=>{setCurrentTab("messages")}} style={{color: currentTab=="messages" ? "red" : "black"}}>messages</button>
        <button onClick={()=>{setCurrentTab("jobs")}} style={{color: currentTab=="jobs" ? "red" : "black"}}>Jobs</button>
    </div>
}

export default App3;