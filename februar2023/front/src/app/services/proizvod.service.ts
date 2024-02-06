import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proizvodi } from '../models/proizvodi';
import { User } from '../models/korisnici';
import { Objekat } from '../models/objekat';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http: HttpClient) { }

  getAllProizvodi(){
    return this.http.get<Proizvodi[]>("http://localhost:4000/proizvodi/getAllProizvodi")
  }

  dodajProizvode(listaProizvoda: Proizvodi[], kolicina: number[], u: User){
    let listaProizvodaObjekti: Objekat[] = []
    let listaProizvodaString: string[] = []
    listaProizvoda.forEach(p=>{
      listaProizvodaString.push(p.naziv)
    })
    for(let index = 0; index < listaProizvoda.length; index++){
      let pomObjekat = {
        naziv: listaProizvoda[index].naziv,
        kolicina: kolicina[index].toString()
      }
      listaProizvodaObjekti.push(pomObjekat);
    }
    let data = {
      listaProizvoda: listaProizvodaString,
      listaKolicina: kolicina,
      lista: listaProizvodaObjekti,
      kupac: u.kor_ime,
    }
    return this.http.post<number>("http://localhost:4000/proizvodi/dodajProizvode", data)
  }
}
