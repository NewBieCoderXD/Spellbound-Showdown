import express, { Router, Request, Response } from "express";
import * as ws from "ws";
import app from "../../app";

export let apiRouter = Router();
import "./websocket"
import { createPlayer, generateRoomId } from "../../utils/util";
import { Room } from "../../game/Room";
import { rooms } from "../..";
apiRouter.post("/createRoom",(req:Request,res:Response)=>{
    console.log(req.body);
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
        return;
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
    rooms[roomId]=room;
})

app.use("/api",apiRouter)