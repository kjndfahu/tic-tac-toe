import { PlayerEntity} from "../domain";
import { gameRepository } from "../repositories/game";
import cuid from "cuid";
import {left, right} from "@/shared/lib/either";

export async function createGame(player: PlayerEntity){
    const playersGames = await gameRepository.gamesList({
        players: {some: {id: player.id}},
        status: 'idle'
    });

    const isGameInIdleStatus = playersGames.some(
        (game) => game.status === 'idle' && game.creator.id === player.id
    )

    if(isGameInIdleStatus){
        return left('can-create-only-one-game' as const)
    }

    const createdGame = await gameRepository.createGame({
        id: cuid(),
        creator: player,
        status: 'idle'
    })

    return right(createdGame)
}