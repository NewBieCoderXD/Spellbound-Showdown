import Card from "../components/Card";
import { CardElement } from "../components/CardElement";
import Player from "../components/Player";
import CardRequest from "../components/CardRequest";
import { Game } from "../game/Game";

class Ignite extends Card {
    name = "จุดไฟ";
    description = "สร้างความเสียหาย 3 แต้ม ไม่สามารถถูกลดความเสียหายได้";
    element = CardElement.fire;
    cost = 1;
    originalCost = 1;
    owner=undefined;
    place=undefined;
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
    effectCancelPersistent(game: Game, requestBody: CardRequest){
        ;
    }
}