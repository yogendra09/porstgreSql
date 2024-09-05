import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
import userRoutes from "./routes/userRoutes.js";
import { connection } from "./config/db.config.js";
connection();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",userRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
