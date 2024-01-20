import { Router, Request, Response } from "express";
import * as ws from "ws";
import { apiRouter } from "./api";
import { rooms } from "../..";
import { generateRoomId } from "../../utils/util";
import Player from "../../components/Player";
import { maxRoomNumber, roomPlayerCapacity } from "../../config";
import { Room } from "../../game/Room";

function createPlayer(playerName:string,playerId:number,room: Room){
    let player = new Player(playerName,room.roomInitHp,room.roomActionsPerTurn,[],[],[],playerId);
    player.room=room;
    return player;
}

apiRouter.post("/createRoom",(req:Request,res:Response)=>{
    let roomName = req.body.name;
    let roomPassword = req.body.password;
    let clockwiseTurnOrder = req.body.clockwiseTurnOrder;
    let roomActionsPerTurn = req.body.roomActionsPerTurn as number;
    let roomInitHp = req.body.roomInitHp as number;
    let errJSON={
        success:false
    }
    if(roomInitHp<0 || roomActionsPerTurn<0 || isNaN(roomInitHp) || isNaN(roomActionsPerTurn)){
        res.json(errJSON)
        return;
    }
    let roomId=generateRoomId(rooms);
    if(roomId==null){
        res.send(JSON.stringify({
            success: false,
            error: "rooms are full."
        }))
    }
    let room: Room = new Room(
        rooms.length,
        roomName,
        roomPassword,
        [],
        clockwiseTurnOrder,
        roomActionsPerTurn,
        roomInitHp,
    )
    
    let roomOwner = createPlayer(req.body.playerName,0,room);
    room.addOwner(roomOwner);
    res.json({
        success: true
    })
})

apiRouter.post("/join",(req:Request,res:Response)=>{
    let errJSON = {
        success:false
    }
    let roomId = req.body.roomId as number;
    if(isNaN(roomId) || roomId>=maxRoomNumber || roomId<0){
        res.json(errJSON)
        return;
    }
    let room = rooms[roomId];
    if(room==null){
        res.json(errJSON)
        return;
    }
    if(room?.players.length<roomPlayerCapacity){
        let player = createPlayer(
            req.body.playerName,
            room?.players.length,
            room
        );
        room.addPlayer(player);
        res.json({
            success:true
        })
        return;
    }
    res.json(errJSON)
})

apiRouter.ws("/websocket",(websocket:ws,req:Request)=>{
    websocket.addEventListener("message",(msg)=>{
        
    })
})