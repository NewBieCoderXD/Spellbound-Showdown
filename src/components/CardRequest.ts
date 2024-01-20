import Card from "../components/Card";
import Player from "../components/Player";

export default class CardRequest{
    caller: Player;
    targetPlayer: Player;

    constructor(caller: Player, targetPlayer: Player) {
        this.caller = caller;
        this.targetPlayer = targetPlayer;
    }
}