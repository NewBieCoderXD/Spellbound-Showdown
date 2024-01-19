import { Router, Request, Response } from "express";
import * as ws from "ws";
import { apiRouter } from "./api";
import { rooms } from "../..";
import { generateRoomId } from "../../utils/util";

apiRouter.post("/createRoom",(req:Request,res:Response)=>{
    let roomName = req.body.name;
    let roomPassword = req.body.password;
    let roomOwner = req.body.player;
    let roomId=generateRoomId(rooms);
    if(roomId==null){
        res.send(JSON.stringify({
            success: false,
            error: "rooms are full."
        }))
    }
    rooms.push({
        roomId: rooms.length.toString(),
        roomName: roomName,
        roomPassword: roomPassword,
        roomOwner: roomOwner,
        players:[
            //getPlayer(roomOwner)
        ]
    })
})

apiRouter.ws("/websocket",(websocket:ws,req:Request)=>{
    websocket.send("gg");
})