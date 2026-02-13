interface Game {
    id: string,
    whitePlayer: string,
    blackPlayer: string,
    moves: string[]
}

class GameManager {
    //singleton instance
    private static instance:GameManager;
    private games:Game[] = [];

    private constructor(){
        this.games = [];
    }

    public static getInstance():GameManager{
        if(!GameManager.instance){
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }


    public addGame(newGame:Game){
        this.games.push(newGame);
    }
    
    public addMove(gameId:string, move:string){
        const game = this.games.find(game=>game.id ===gameId);
        game?.moves.push(move)
    }
    public logState() {
        console.log(this.games);
    }
}

export const  gameManager = GameManager.getInstance()