import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }


  url = 'http://localhost:4000'
  
  dodajZadatak(sadrzaj: string, tip: string, dodeljen: string){
    let data = {
      sadrzaj: sadrzaj,
      tip: tip,
      dodeljen: dodeljen
    }
    console.log(data);
    return this.http.post("http://localhost:8080/zadaci/dodajZadatak", data);
  }

  dohvatiLicneZadatke(username: string){
    let data = {
      username: username
    }
    return this.http.post("http://localhost:8080/zadaci/dohvatiLicneZadatke", username);
  }

  dohvatiDelegiraneZadatke(username: string){
    let data = {
      username: username
    }
    return this.http.post("http://localhost:8080/zadaci/dohvatiDelegiraneZadatke", username);
  }
  
  dohvatiObavljeneZadatke(username: string){
    let data = {
      username: username
    }
    return this.http.post("http://localhost:8080/zadaci/dohvatiObavljeneZadatke", username);
  }

  obrisiZadatak(sadrzaj: string, obavljen: boolean, tip: string, dodeljen: string){
    let data = {
      sadrzaj: sadrzaj,
      obavljen: obavljen,
      tip: tip,
      dodeljen: dodeljen
    }
    return this.http.post("http://localhost:8080/zadaci/obrisiZadatak", data);
  }

  obaviZadatak(sadrzaj: string, obavljen: boolean, tip: string, dodeljen: string){
    let data = {
      sadrzaj: sadrzaj,
      obavljen: obavljen,
      tip: tip,
      dodeljen: dodeljen
    }
    return this.http.post("http://localhost:8080/zadaci/obaviZadatak", data);
  }

  neobaviZadatak(sadrzaj: string, obavljen: boolean, tip: string, dodeljen: string){
    let data = {
      sadrzaj: sadrzaj,
      obavljen: obavljen,
      tip: tip,
      dodeljen: dodeljen
    }
    return this.http.post("http://localhost:8080/zadaci/neobaviZadatak", data);
  }
}
