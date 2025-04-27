import { app } from "./app.js";
import { connectDB } from "./database/db.js";

connectDB().then(() => {
        app.listen(process.env.PORT, () => {
          console.log(`Connected to mongodb localhost at port : ${process.env.PORT}.`);
        })
}).catch(error => console.log(error))