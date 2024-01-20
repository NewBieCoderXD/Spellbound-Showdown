import { Room } from "../game/Room";

export function generateRoomId(rooms: Array<Room|null>): number|null{
    for(let i=0;i<rooms.length;i++){
        if(rooms[i]==null){
            return i;
        }
    }
    return null;
}