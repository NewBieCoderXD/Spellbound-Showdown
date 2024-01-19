import express, {Express, Request} from "express"
import Player from "./components/Player";
import Game from "./game/Game";
// import * as dotenv from "dotenv"
const app: Express = express();
const port: number = 8080;

interface room{
    websocketId:string,
    players:Array<Player>,
    
}
let rooms: Array<Game> = [];

