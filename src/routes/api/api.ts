import { Router, Request, Response } from "express";
import * as ws from "ws";
import app from "../../app";

export let apiRouter = Router();
import "./websocket"

app.use("/api",apiRouter)