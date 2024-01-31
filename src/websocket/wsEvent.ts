import EventEmitter from 'events'
import { createPlayer } from '../utils/util';
import { maxRoomNumber, roomPlayerCapacity } from '../config';
import { rooms } from '..';
export let wsEvent = new EventEmitter();
wsEvent.on("join",(ws,wsMessage)=>{
    let roomId = wsMessage.roomId as number;
    if(isNaN(roomId) || roomId>=maxRoomNumber || roomId<0){
        ws.send(JSON.stringify({
            succeed: false,
            error: "the room doesn't exist!"
        }));
        return;
    }
    let room = rooms[roomId];
    if(room==null){
        ws.send(JSON.stringify({
            succeed: false,
            error: "the room doesn't exist!"
        }));
        return;
    }
    if(room.roomPassword!==wsMessage.roomPassword){
        ws.send(JSON.stringify({
            succeed: false,
            error: "wrong password"
        }));
        return;
    }
    if(room?.game.players.length<roomPlayerCapacity){
        let player = createPlayer(
            wsMessage.playerName,
            room?.game.players.length,
            room
        );
        room.addPlayer(player);
        ws.send(JSON.stringify({
            succeed: true
        }));
        return;
    }
    ws.send(JSON.stringify({
        succeed: false,
        error: "the room is full!"
    }));
})