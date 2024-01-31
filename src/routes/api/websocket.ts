import { Router, Request, Response } from "express";
import * as ws from "ws";
import { apiRouter } from "./api";
import { rooms } from "../..";
import { generateRoomId } from "../../utils/util";
import Player from "../../components/Player";
import { maxRoomNumber, roomPlayerCapacity } from "../../config";
import { Room } from "../../game/Room";
import { Stack } from "../../utils/Stack";
import { joinWebsocket } from "../../websocket/joinWebsocket";
import { wsEvent } from "../../websocket/wsEvent";

apiRouter.ws("/websocket",(websocket:ws,req:Request)=>{
    websocket.addEventListener("message",(msg)=>{
        let wsMessage = JSON.parse(msg.data.toString());
        wsEvent.emit(wsMessage.type,websocket, wsMessage);
    })
})