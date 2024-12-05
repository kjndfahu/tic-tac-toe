import { GameId, UserId } from "@/kernel/ids";

export type GameEntity = GameIdleEntity  | GameInProgressEntity  | GameOverEntity | GameOverDrawEntity ;

export type GameIdleEntity  = {
    id: GameId;
    creator: PlayerEntity;
    field: Field;
    status: 'idle';
}

export type GameInProgressEntity  = {
    id: GameId;
    field: Field;
    players: PlayerEntity[];
    status: 'inProgress';
}

export type GameOverEntity  = {
    id: GameId;
    field: Field;
    players: PlayerEntity[];
    status: 'gameOver';
    winner: PlayerEntity ;
}

export type GameOverDrawEntity  = {
    id: GameId;
    field: Field;
    players: PlayerEntity[];
    status: 'gameOverDraw';
}

export type Field = (GameSymbol | null)[];
export type GameSymbol = string;

export type PlayerEntity  = {
    id: UserId;
    login:string;
    rating: number;
}

export const GameSymbol = {
    X: "X",
    O: "O"
}

export const getGameCurrentStep = (game: GameInProgressEntity | GameOverEntity | GameOverDrawEntity) => {
    const symbols = game.field.filter((s) => s !== null).length

    return symbols % 2 === 0 ? GameSymbol.X : GameSymbol.O
}

export const getNextSymbol = (gameSymbol: GameSymbol) => {
    if(gameSymbol === GameSymbol.X){
        return GameSymbol.O
    }

    return GameSymbol.X
}