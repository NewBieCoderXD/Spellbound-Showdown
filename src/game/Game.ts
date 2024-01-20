import Card from "../components/Card";
import Player from "../components/Player";
import { Room } from "./Room";

export class Game {
    constructor(
        room: Room,
        players: Array<Player>,
        deck: Array<Card>,
        discardDeck: Array<Card>
    ) {
        this.room = room
        this.players = players
        this.deck = deck
        this.discardDeck = discardDeck
    }
    
    room: Room;
    players: Array<Player>;
    deck: Array<Card>;
    discardDeck: Array<Card>;


}