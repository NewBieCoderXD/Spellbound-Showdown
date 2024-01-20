import Player from "../components/Player";

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
        this.players = players
        this.clockwiseTurnOrder = clockwiseTurnOrder
        this.roomInitHp = roomInitHp
        this.roomActionsPerTurn = roomActionsPerTurn
    } 
    roomId: number
    roomName: string
    roomPassword: string
    roomOwner?: Player
    players: Array<Player>
    currentTurn?: Player
    clockwiseTurnOrder: boolean
    roomInitHp: number
    roomActionsPerTurn: number

    addOwner(player: Player){
        this.roomOwner=player;
        this.currentTurn=player;
        this.players.push(player);
    }

    addPlayer(player: Player){
        this.players.push(player);
    }
}