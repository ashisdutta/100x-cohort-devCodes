import { gameManager } from "./store.js";

export function startLogger(){
    setInterval(()=>{
        gameManager.logState();
    }, 4000)
}