import * as express from "express";
import Korisnik from "../models/users";

export class userController{

    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;

        Korisnik.findOne({korisnickoIme: username, lozinka: password}).then(kor=>{
            res.json(kor)
        }).catch(err=>{
            console.log(err)
        })
    }

    getUser = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;

        Korisnik.findOne({korisnickoIme: username}).then(kor=>{
            res.json(kor)
        }).catch(err=>{
            console.log(err)
        })
    }

    getListaZelja = (req: express.Request, res: express.Response)=>{
       let username = req.body.username
       Korisnik.findOne({korisnickoIme: username}).then(kor=>{
        if(kor!=null){
            res.json(kor.lista)
        }else{
            res.json(null)
        }
       }).catch(err=>{
        console.log(err)
       })    
    }

    dodaj = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let naziv = req.body.naziv;
        let cena = req.body.cena;
        let obj = {
            proizvod:naziv,
            cena:cena,
            kupio:null,
            anonimno:false
        }
        Korisnik.updateOne({korisnickoIme: username},{$push: {lista:obj}}).then(response=>{
            res.json("Proslo")
        }).catch((err)=>{
            console.log(err)
        })
    }

    getAllKorisnici = (req: express.Request, res: express.Response)=>{
        Korisnik.find({}).then(korisnici=>{
            res.json(korisnici)
        }).catch((err)=>{
            console.log(err)
        })
    }

    kupi = (req: express.Request, res: express.Response)=>{
        let usernameKomeSeKupuje = req.body.usernameKomeSeKupuje;
        let usernameKojiKupuje = req.body.usernameKojiKupuje;
        let proizvodKojiSeKupuje = req.body.proizvodKojiSeKupuje;
        let cena = req.body.cena;
        Korisnik.updateOne({korisnickoIme:usernameKojiKupuje},{$inc: {potroseno: cena}}).then(res=>{
            console.log("Uspeh")
        }).catch(err=>{
            console.log(err)
        })
        Korisnik.updateOne({korisnickoIme:usernameKojiKupuje},{$inc: {naStanju: -cena}}).then(res=>{
            console.log("Uspeh")
        }).catch(err=>{
            console.log(err)
        })
        Korisnik.updateOne({korisnickoIme:usernameKomeSeKupuje, 'lista.proizvod':proizvodKojiSeKupuje}, {
            $set:{
                'lista.$.kupio':usernameKojiKupuje,
                'lista.$.anonimno':false
            }
        }).then(res=>{
            console.log("Uspeh")
        }).catch(err=>{
            console.log("Neuspeh")
        })
    }

    kupiAnonimno = (req: express.Request, res: express.Response)=>{
        let usernameKomeSeKupuje = req.body.usernameKomeSeKupuje;
        let usernameKojiKupuje = req.body.usernameKojiKupuje;
        let proizvodKojiSeKupuje = req.body.proizvodKojiSeKupuje;
        let cena = req.body.cena;
        Korisnik.updateOne({korisnickoIme:usernameKojiKupuje},{$inc: {potroseno: cena}}).then(res=>{
            console.log("Uspeh")
        }).catch(err=>{
            console.log(err)
        })
        Korisnik.updateOne({korisnickoIme:usernameKojiKupuje},{$inc: {potroseno: -cena}}).then(res=>{
            console.log("Uspeh")
        }).catch(err=>{
            console.log(err)
        })
        Korisnik.updateOne({korisnickoIme:usernameKomeSeKupuje, 'lista.proizvod':proizvodKojiSeKupuje}, {
            $set:{
                'lista.$.kupio':usernameKojiKupuje,
                'lista.$.anonimno':true
            }
        }).then(res=>{
            console.log("Uspeh")
        }).catch(err=>{
            console.log("Neuspeh")
        })
    }

    getAllKorisniciSorted = (req: express.Request, res: express.Response)=>{
        Korisnik.find({tip: "registrovani"}).sort({potroseno: -1}).then(users=>{
            res.json(users)
        }).catch(err=>{
            console.log(err);
        })
    }

    uplati = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let cena = 5000
        Korisnik.updateOne({korisnickoIme:username} , {$inc: {naStanju: cena}}).then(res=>{
            console.log("Uspeh")
        }).catch(err=>{
            console.log(err)
        })
    }
}