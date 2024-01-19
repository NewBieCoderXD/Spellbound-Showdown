import { Game } from "../game/Game";
import { CardElement } from "./CardElement";
import Player from "./Player";

export default interface Card {
    name: string,
    description: string,
    element: CardElement,
    cost: number,
    effect: (game: Game)=>void
}