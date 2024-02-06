import * as express from "express";
import Korisnik from "../models/korisnici";
import Proizvod from "../models/proizvodi"
import Narudzbine from "../models/narudzbine"


export class NarudzbineController{
    getAllNarudzbine = (req: express.Request, res: express.Response)=>{
        Narudzbine.find({}).then(narudzbine=>{
            res.json(narudzbine)
        }).catch(err=>{
            console.log(err)
        })
    }
}