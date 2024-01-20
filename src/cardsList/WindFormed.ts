import Card from "../components/Card";
import { CardElement } from "../components/CardElement";
import Player from "../components/Player";
import CardRequest from "../components/CardRequest";
import { Game } from "../game/Game";

class Ignite extends Card {
    name = "Ignite";
    description = "Deal 3 damage. Damage can't be reduced.";
    element = CardElement.fire;
    cost = 1;
    owner=null;
    place=null;
    CanBeCancelled=true;
    CanBeReduced=false;
    damageIncrease=0;
    async effect(game: Game, requestBody: CardRequest){
        let damage = 3+this.damageIncrease;
        let targetPlayer = requestBody.targetPlayer;
        if(targetPlayer==null){
            return false;
        }
        let result = await targetPlayer.waitQuickCard(targetPlayer,CanBeCancelled,CanBeReduced);
        if(result.isCancelled){
            return true;
        }
        if(result.isReduced){
            damage=Math.max(damage-result.reduce,0);
        }
        this.attack(targetPlayer,damage)
        return true;
    }

    effectPersistent(game: Game, requestBody: CardRequest){
        ;
    }
}