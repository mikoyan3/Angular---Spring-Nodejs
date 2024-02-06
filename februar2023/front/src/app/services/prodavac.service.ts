import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Narudzbine } from '../models/narudzbine';
import { Proizvodi } from '../models/proizvodi';

@Injectable({
  providedIn: 'root'
})
export class ProdavacService {

  constructor(private http: HttpClient) { }

  getAllNarudzbine(){
    return this.http.get<Narudzbine[]>("http://localhost:4000/narudzbine/getAllNarudzbine")
  }

  dodajStanje(proizvodi: Proizvodi[], kolicina: number[]){
    let listaProizvodaString: string[] = []
    proizvodi.forEach(p=>{
      listaProizvodaString.push(p.naziv)
    })
    let data = {
      listaProizvoda: listaProizvodaString,
      listaKolicina: kolicina
    }
    return this.http.post("http://localhost:4000/proizvodi/dodajStanje", data)
  }
}
