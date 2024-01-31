// import express, {Express, Request, Response} from "express"
// import * as ws from "ws";
// import expressWs from "express-ws"
// import Player from "./components/Player";
import {maxRoomNumber, port} from "./config"
// import { Game } from "./game/Game";
// import app from "./app";
import { Room } from "./game/Room";
import "./routes/api/api"
import { loadDeck, setupDeck } from "./deck/deckLoader";
import app from "./app";
// import * as dotenv from "dotenv"



export const rooms: Array<Room|null> = new Array(maxRoomNumber).fill(null);

async function main(){
    await setupDeck();
    app.listen(port,()=>{
        console.log("server is on",port);
    });
}
main();