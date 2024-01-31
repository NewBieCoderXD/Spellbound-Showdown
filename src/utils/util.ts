import Card from "../components/Card";
import Player from "../components/Player";
import { Room } from "../game/Room";
import { Stack } from "./Stack";

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

export function createPlayer(playerName:string,playerId:number,room: Room){
    let player = new Player(playerName,room.roomInitHp,room.roomActionsPerTurn,[],[],new Stack(),playerId);
    player.room=room;
    return player;
}