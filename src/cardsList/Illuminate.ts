import Card from "../components/Card";
import { CardElement } from "../components/CardElement";
import Player from "../components/Player";
import CardRequest from "../components/CardRequest";
import { Game } from "../game/Game";
import { removeFromList } from "../utils/util";
import { CardPlace } from "../components/CardPlace";

export class Illuminate extends Card {
    costDiff=0;
    name = "ส่องสว่าง";
    description = "ดูการ์ด 3 ใบในเด็ค เลือกหนึ่งใบลงพื้นที่พิธีกรรมของคุณในสถาพSlowdown ติดตา:การ์ดในพื้นที่พิธีกรรมใช้เวลาร่ายลดลง 2 แอคชั่น";
    element = CardElement.holy;
    cost = 1;
    owner:Player|undefined=undefined;
    place:CardPlace|undefined=undefined;
    CanBeCancelled=true;
    CanBeReduced=true;
    async effect(game: Game, requestBody: CardRequest){
        let PickedCards: Array<Card> =  game.deck.pickLast(3);
        //* Must add processes to choose one card from PickedCards
        let choosenCard: Card; // assumed
        // this.owner!.field.push(choosenCard);
        // //* Must make it Slowdown
        // removeFromList(PickedCards,choosenCard);
        // game.deck.pullTopBack(PickedCards);
        return true;
    }

    effectPersistent(game: Game, requestBody: CardRequest){
        //all Cards in the field area of owner are reduced cost by 2 (cannot be lower than 0)
        if (this.owner){
            for (const card of this.owner.field) {
                card.costDiff -= 2;
            }
        }
    }

    effectCancelPersistent(game: Game, requestBody: CardRequest) {
        if(this.owner){
            for (const card of this.owner.field) {
                card.costDiff += 2;
            }
        }
    }
}