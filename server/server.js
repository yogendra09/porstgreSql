import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
import userRoutes from "./routes/userRoutes.js";
import { connection } from "./config/db.config.js";
import path from "path";
connection();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1",userRoutes);

if(true){
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname,"client/dist")));
  app.get("*",(req,res,next)=>{
    res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
  })
}else{
  app.get("/", (req, res, next) => res.send("server is ready"));

}

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
