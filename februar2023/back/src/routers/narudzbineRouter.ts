import express from "express";
import { NarudzbineController } from "../controllers/narudzbineController";
const narudzbineRouter = express.Router();

narudzbineRouter.route("/getAllNarudzbine").get((req,res)=>new NarudzbineController().getAllNarudzbine(req,res));
//userRouter.route("/getUser").post((req, res) => new UserController().getUser(req, res));
export default narudzbineRouter;