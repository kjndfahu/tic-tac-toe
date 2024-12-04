import { GameId, UserId } from "@/kernel/ids";

export type GameEntity = GameIdleEntity  | GameInProgressEntity  | GameOverEntity | GameOverDrawEntity ;

export type GameIdleEntity  = {
    id: GameId;
    creator: PlayerEntity;
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