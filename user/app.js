import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./router/user.router.js";
import { connect } from "./service/RabbitMQ.js";
dotenv.config();

const app = express();

connect();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/", userRouter);

export { app };
