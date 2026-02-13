import { gameManager } from "./store.js";
import { startLogger } from "./logger.js";
function main(){
    setInterval(()=>{
        gameManager.addGame({
            id: Math.random().toString(),
            whitePlayer:"ashis",
            blackPlayer:"dharma",
            moves:[]
        })
    }, 5000)
}