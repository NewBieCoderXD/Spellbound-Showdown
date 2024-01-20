import Card from "../components/Card";
import Player from "../components/Player";
import { Stack } from "../utils/Stack";
import { Room } from "./Room";

export class Game {
    constructor(
        room: Room,
        players: Array<Player>,
        deck: Stack<Card>,
        discardDeck: Stack<Card>
    ) {
        this.room = room
        this.players = players
        this.deck = deck
        this.discardDeck = discardDeck
    }
    
    room: Room;
    players: Array<Player>;
    deck: Stack<Card>;
    discardDeck: Stack<Card>;


}