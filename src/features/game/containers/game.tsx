'use client'

import { GameId } from "@/kernel/ids";
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameDomain } from "@/enteties/game";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { useEffect, useState } from "react";
import { useEventSource } from "@/shared/lib/sse/client";

export function Game({gameId}: {gameId: GameId}){

    const {dataStream, error} = useEventSource(`/game/${gameId}/stream`, 1)

    const game: GameDomain.GameEntity = {
        id: "1",
        players: [
            {
                id: "1",
                login: "Test",
                rating: 1000
            },
            {
                id: "1",
                login: "Test",
                rating: 1000
            }
        ],
        field: [null, null, null, 'X', 'O', null, null, null, null],
        status: "inProgress",
    }
    return (
        <div>
            {dataStream}

            {error ? 'Ошибка подключения' : undefined}
        </div>
    )

    return <GameLayout
    players={<GamePlayers game={game}/>} 
    status={<GameStatus game={game}/>}
    field={<GameField game={game}/>}
    />
}