import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Database } from "./config/db";

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;
const db = new Database();

app.use(
    cors({
        origin: "http://localhost:5173"
    })
)

app.get("/", (req,res) => {
    res.status(200).send("Server is working "+port);
})

app.get("/sus", (req, res) => {
    res.status(200).json({
        blue: "not sus",
        yellow: "not sus",
        pink: "kinda sus",
        green: "gay",
        red: "sus amongus sussy baka"
    })
})

app.get("/igaveup", async (req,res) => {
    const tempData = db.getData();   
    res.status(200).send(tempData);
    console.log(tempData);
})

app.listen(port, () => {
    console.log(`Server Running at ${port}"`);
})