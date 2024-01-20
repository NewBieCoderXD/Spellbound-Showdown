import Card from "../components/Card";
import { Room } from "../game/Room";

export function generateRoomId(rooms: Array<Room|null>): number|null{
    for(let i=0;i<rooms.length;i++){
        if(rooms[i]==null){
            return i;
        }
    }
    return null;
}

export function removeFromList(list: Array<Card>, card: Card){
    let cardIndex = list.indexOf(card);
    if(cardIndex !== -1){
        list.splice(cardIndex, 1);
    }
}