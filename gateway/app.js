import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy";

const app = express()
dotenv.config({path: ".env"})

app.use("/user", proxy(process.env.USER_ROUTE));
app.use("/post", proxy(process.env.POST_ROUTE));

app.listen(process.env.PORT, () => {
          console.log(`gateway listening on port : ${process.env.PORT}`)
})