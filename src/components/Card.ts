import { Game } from "../game/Game";
import { CardElement } from "./CardElement";
import { CardPlace } from "./CardPlace";
import Player from "./Player";

// export default interface Card {
//     name: string,
//     description: string,
//     element: CardElement,
//     cost: number,
//     owner: Player | null,
//     place: CardPlace | null,
//     CanBeCancelled:boolean;
//     CanBeReduced:boolean;
//     effect: (game: Game,requestBody: any)=>boolean;
//     attack: (player:Player)=>void;
// }

export default abstract class Card {
    abstract name: string;
    abstract description: string;
    abstract element: CardElement;
    abstract cost: number;
    abstract originalCost: number;
    abstract owner: Player | undefined;
    abstract place: CardPlace | undefined;
    abstract CanBeCancelled:boolean;
    abstract CanBeReduced:boolean;
    damageIncrease=0;
    abstract effect(game: Game,requestBody: any): Promise<boolean>;
    abstract effectPersistent(game: Game,requestBody: any): void;
    abstract effectCancelPersistent(game: Game,requestBody: any): void;
    attack(targetPlayer: Player, damage:number): void{
        targetPlayer.hp-=damage;
    }
    heal(targetPlayer: Player, restore:number): void{
        targetPlayer.hp+=restore;
    }
}