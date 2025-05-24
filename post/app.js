
import express from "express";
import dotenv from "dotenv";
import { connect } from "./service/RabbitMQ.js";
import postRouter from "./router/post.router.js"
dotenv.config({ path: ".env" });
const app = express();
connect();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", postRouter);
export { app };