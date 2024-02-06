import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { korisnici } from '../models/korisnici';
import { aukcije } from '../models/aukcije';
import { umetnine } from '../models/umetnine';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string, tip: string){
    let data = {
      username: username,
      password: password,
      tip: tip
    }
    return this.http.post<korisnici>('http://localhost:8080/user/login', data);
  }

  getAktivneAukcije(){
    return this.http.get<aukcije[]>('http://localhost:8080/user/dohvatiAktivneAukcije');
  }

  dohvatiUmetnine(idA: number){
    return this.http.post<umetnine[]>('http://localhost:8080/user/dohvatiUmetnine', idA);
  }

  izmeniPonudu(idU: number, ponuda: number){
    let data = {
      idU: idU,
      ponuda: ponuda
    }
    return this.http.post('http://localhost:8080/user/izmeniPonudu', data);
  }

  dohvatiKupljeneUmetnine(username: string){
    return this.http.post<umetnine[]>('http://localhost:8080/user/dohvatiKupljeneUmetnine', username);
  }

  dohvatiSveAukcije(){
    return this.http.get<aukcije[]>('http://localhost:8080/user/dohvatiSveAukcije');
  }
}
