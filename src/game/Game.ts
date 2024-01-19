import Card from "../components/Card";
import Player from "../components/Player";

export class Game {
    players: Array<Player>=[];
    deck: Array<Card>=[];
    discardDeck: Array<Card>=[];
}