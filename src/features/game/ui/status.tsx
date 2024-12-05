import { GameDomain } from "@/enteties/game";

export function GameStatus({game}: {game: GameDomain.GameEntity}){
    switch(game.status){
        case "idle":
            return <div className="text-lg">O - ожидание</div>
        case "inProgress": {
            const currentSymbol = GameDomain.getGameCurrentStep(game)
            return <div className="text-lg">Ход: {currentSymbol}</div>
        }
        case "gameOver":{
            const currentSymbol = GameDomain.getGameCurrentStep(game)
            return <div className="text-lg">Победитель: {currentSymbol}</div>
        }

        case "gameOverDraw":
            return <div className="text-lg">O - ожидание</div>
    }
}