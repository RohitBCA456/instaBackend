import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import userRouter from "./router/user.router.js";
import { connect } from "./service/RabbitMQ.js";
import { socketChatHandler } from "./controller/user.controller.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

socketChatHandler(io);

connect();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/", userRouter);

httpServer.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});

export { app, httpServer };
