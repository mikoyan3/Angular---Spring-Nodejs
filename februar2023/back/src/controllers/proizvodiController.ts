import * as express from "express";
import Korisnik from "../models/korisnici";
import Proizvod from "../models/proizvodi"
import Narudzbine from "../models/narudzbine"


export class ProizvodiController{
    getAllProizvodi = (req: express.Request, res: express.Response)=>{
        Proizvod.find({}).sort({kategorija: -1}).then(proizvodi=>{
            res.json(proizvodi)
        }).catch(err=>{
            console.log(err)
        })
    }

    dodajStanje = (req: express.Request, res: express.Response)=>{
        let listaProizvoda = req.body.listaProizvoda
        let listaKolicina = req.body.listaKolicina
        for(let i = 0; i<listaProizvoda.length; i++){
            Proizvod.findOneAndUpdate({naziv:listaProizvoda[i]},{$inc:{stanje: listaKolicina[i]}}).then(proizvod=>{
                res.json("uspeh")
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    dodajProizvode = (req: express.Request, res: express.Response)=>{
        let listaProizvoda = req.body.listaProizvoda
        let listaKolicina = req.body.listaKolicina
        let ukupnaCena: number = 0
        let listaProizvodaObjekti = req.body.lista
        let kupac = req.body.kupac
        let maxId: number = 0
        for (let index = 0; index < listaProizvoda.length; index++) {
            Proizvod.findOneAndUpdate({naziv:listaProizvoda[index]}, {$inc:{stanje: -listaKolicina[index]}}).then(proizvod=>{
                if(proizvod != null){
                    let cena: number = proizvod.cena ? parseFloat(proizvod.cena) : 0
                    let kolicina: number = listaKolicina[index]
                    ukupnaCena += cena*kolicina;
                }
                if(index == listaProizvoda.length-1){
                    res.json(ukupnaCena)
                    Narudzbine.find({}).sort({idN: -1}).limit(1).then(kolekcija=>{
                        if(kolekcija.length>0){
                            maxId = kolekcija[0].idN + 1 
                            let novaPorudzbina = {
                                idN: maxId,
                                kupac: kupac,
                                proizvodi:listaProizvodaObjekti,
                                racun:ukupnaCena
                            }
                            Narudzbine.create(novaPorudzbina).then(savedPorudzbina=>{
                                console.log("Uspeh")
                            }).catch(err=>{
                                console.log(err)
                            })
                        }
                    })
                }
            }).catch(err=>{
                    console.log(err)
            })
        }
    }
}