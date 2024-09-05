import express from "express"
import { createUser, findUser, test, updateUser, users } from "../controllers/userController.js";

const router = express.Router();

router.get("/test",test);
router.post("/createUser",createUser);
router.post("/users",users);
router.post("/user/:id",findUser);
router.post("/updateUser/:id",updateUser);


export default router;