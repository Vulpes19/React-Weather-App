import express, {Express, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const corsOptions = {
    origin: "http://localhost:5173",
    methods: 'GET'
};

app.use("/", cors(corsOptions));

app.get("/", async (req: Request, res: Response) => {
    console.log('sending ', req.query.city);
    if (process.env.API_URL)
    {
        console.log(process.env.API_URL)
        console.log(process.env.API_KEY)
        try {
            const apiResponse = await axios.post(process.env.API_URL + '/forecast.json', {},{
                params: {
                    key: process.env.API_KEY,
                    q: req.query.city,
                    days: 7,
                }
            })
            res.send(apiResponse.data);
        }
        catch(error) {
            res.status(500).send(error);
        }
    }
});

app.listen((port), () => {
    console.log(`listening to port ${port}`);
})