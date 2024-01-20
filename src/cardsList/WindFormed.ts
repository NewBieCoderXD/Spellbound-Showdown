import Card from "../components/Card";
import { CardElement } from "../components/CardElement";
import Player from "../components/Player";
import CardRequest from "../components/CardRequest";
import { Game } from "../game/Game";
import { CardPlace } from "../components/CardPlace";

class WindFormed extends Card {
    name = "สายลมก่อตัว";
    description = "สร้างความเสียหาย 1 แต้ม นำการ์ดนี้ลงพื้นที่พิธีกรรมของคุณในสภาพSlowdown ทำพิธีหรือลิงก์(ธรรมชาติ): สร้างความเสียหาย 3 แต้มและได้รับพลังชีวิต 2 แต้มแทน";
    element = CardElement.neutral;
    cost = 1;
    originalCost = 1;
    owner:Player|undefined=undefined;
    place: CardPlace | undefined=undefined;
    CanBeCancelled=true;
    CanBeReduced=true;
    damageIncrease=0;
    async effect(game: Game, requestBody: CardRequest){
        let damage = 1+ this.damageIncrease;
        let damageRitual = 3+ this.damageIncrease;
        let restore = 2;
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
            damageRitual=Math.max(damageRitual-result.reduce,0);
        }

        switch(this.place!){
            case(CardPlace.playerHand):{ // Normal Play
                if(this.owner!.stack.peek().element == CardElement.neutral){ // if Link(Neutral)
                    this.attack(targetPlayer,damageRitual);
                    this.heal(this.owner!,restore);
                }else{
                    this.attack(targetPlayer,damage);
                    this.owner!.putToField(this);
                }
                break;
            }
            case(CardPlace.playerField):{ // Ritual Play
                this.attack(targetPlayer,damageRitual);
                this.heal(this.owner!,restore);
                break;
            }
            default:{
                return false;
            }
        }
        return true;
    }

    effectPersistent(game: Game, requestBody: CardRequest){
        ;
    }
    effectCancelPersistent(game: Game, requestBody: CardRequest){
        ;
    }
}