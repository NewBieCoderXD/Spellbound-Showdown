import Card from "../components/Card";
import Player from "../components/Player";
import { loadDeck } from "../deck/deckLoader";
import { shuffleDeck } from "../deck/shuffleDeck";
import { Stack } from "../utils/Stack";
import { Game } from "./Game";

export class Room {

    constructor(
        roomId: number,
        roomName: string,
        roomPassword: string,
        players: Array<Player>,
        clockwiseTurnOrder: boolean,
        roomInitHp: number,
        roomActionsPerTurn: number
    ) {
        this.roomId = roomId
        this.roomName = roomName
        this.roomPassword = roomPassword
        this.game=new Game(this,players,shuffleDeck(loadDeck()!),new Stack<Card>());
        this.game.players = players
        this.clockwiseTurnOrder = clockwiseTurnOrder
        this.roomInitHp = roomInitHp
        this.roomActionsPerTurn = roomActionsPerTurn
    } 
    roomId: number
    roomName: string
    roomPassword: string
    roomOwner?: Player
    currentTurn?: Player
    clockwiseTurnOrder: boolean
    roomInitHp: number
    roomActionsPerTurn: number
    game: Game

    addOwner(player: Player){
        this.roomOwner=player;
        this.currentTurn=player;
        this.game.players.push(player);
    }

    addPlayer(player: Player){
        this.game.players.push(player);
    }
}

// function shuffleDeck(arg0: Promise<Stack<import("../components/Card").default>>): Stack<import("../components/Card").default> {
//     throw new Error("Function not implemented.");
// }
