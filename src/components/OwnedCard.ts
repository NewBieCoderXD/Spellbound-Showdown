import Card from "./Card"
import { CardPlace } from "./CardPlace"
import Player from "./Player"

export default interface OwnedCard extends Card{
    owner: Player,
    place: CardPlace,
}