import express, {Express, Request, Response} from "express"
import * as ws from "ws";
import expressWs from "express-ws"
import Player from "./components/Player";
import {maxRoomNumber, port} from "./config"
import { Game } from "./game/Game";
import "./routes/api/api"
import app from "./app";
// import { apiRouter } from "./routes/api/api";
// import * as dotenv from "dotenv"

export interface room{
    roomId:string,
    roomName: string,
    roomPassword: string,
    roomOwner: string,
    players:Array<Player>,
    
}
export const rooms: Array<room|null> = new Array(maxRoomNumber).fill(null);
app.listen(port,()=>{
    console.log("server is on",port);
});
