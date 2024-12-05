'use client'
import { GameEntity } from "@/enteties/game/domain";

export function GameField({
    game, onCellClick
} : {
    game: GameEntity,
     onCellClick?: (index:number) => void
    }){
    return (
        <div className="grid grid-cols-3">
            {game.field.map((symbol, index) => (
                <button onClick={() =>onCellClick?.(index)} className="border border-primary w-10 h-10 flex justify-center items-center" key={index}>
                    {symbol ?? ""}
                </button>
            ))}
        </div>
    )
}