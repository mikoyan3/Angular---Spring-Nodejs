import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnici } from '../models/korisnici';
import { proizvodi } from '../models/proizvodi';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {

  constructor(private http: HttpClient) { }
  getAllProizvodi(){
    return this.http.get<proizvodi[]>("http://localhost:8080/proizvodi/getAllProizvodi");
  }

  dodajNarudzbinu(korisnik: korisnici, proizvodi: proizvodi[], kolicina: number[]){
    let data = {
      korisnik: korisnik,
      proizvodi: proizvodi,
      kolicina: kolicina
    }
    return this.http.post("http://localhost:8080/proizvodi/dodajNarudzbinu", data);
  }

  getAllNaruceniProizvodi(idN: number){
    return this.http.post<proizvodi[]>("http://localhost:8080/proizvodi/getAllNaruceniProizvodi", idN);
  }
}
