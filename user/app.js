import express from "express"
import dotenv from "dotenv"
import userRouter from "./router/user.router.js";
import cookieParser from "cookie-parser";

dotenv.config({path: ".env"})
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use("/",userRouter);

export { app };