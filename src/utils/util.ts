import { room } from "..";

export function generateRoomId(rooms: Array<room|null>): number|null{
    for(let i=0;i<rooms.length;i++){
        if(rooms[i]==null){
            return i;
        }
    }
    return null;
}