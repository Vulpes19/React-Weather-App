import express, {Express, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const corsOptions = {
    origin: "http://localhost:5173/",
    methods: 'GET'
};

app.use("/", cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
    console.log('sending');
});

app.listen((port), () => {
    console.log(`listening to port ${port}`);
})