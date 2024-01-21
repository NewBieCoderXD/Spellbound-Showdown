// import express, {Express, Request, Response} from "express"
// import * as ws from "ws";
// import expressWs from "express-ws"
// import Player from "./components/Player";
import {maxRoomNumber, port} from "./config"
// import { Game } from "./game/Game";
// import app from "./app";
import { Room } from "./game/Room";
import "./routes/api/api"
import { loadDeck } from "./deck/deckLoader";
// import * as dotenv from "dotenv"



export const rooms: Array<Room|null> = new Array(maxRoomNumber).fill(null);
// app.listen(port,()=>{
//     console.log("server is on",port);
// });
