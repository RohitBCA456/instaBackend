
import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

export { app };