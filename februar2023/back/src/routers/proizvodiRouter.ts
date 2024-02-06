import express from "express";
import { ProizvodiController } from "../controllers/proizvodiController";
const proizvodiRouter = express.Router();

proizvodiRouter.route("/getAllProizvodi").get((req,res)=>new ProizvodiController().getAllProizvodi(req,res));
proizvodiRouter.route("/dodajProizvode").post((req, res) => new ProizvodiController().dodajProizvode(req, res));
proizvodiRouter.route("/dodajStanje").post((req, res) => new ProizvodiController().dodajStanje(req, res));
export default proizvodiRouter;