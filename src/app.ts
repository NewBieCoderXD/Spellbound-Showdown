import express, {Express, Request, Response} from "express"
import expressWs from "express-ws"
const app = express();
expressWs(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
export default app;