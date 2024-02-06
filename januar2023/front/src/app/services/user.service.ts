import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getListaZelja(user: User){
    let data = {
      username: user.korisnickoIme
    }
    return this.http.post<Object[]>("http://localhost:4000/users/getListaZelja", data)
  }

  dodaj(username: string, naziv: string, cena: number){
    let data = {
      username: username,
      naziv: naziv,
      cena: cena
    }
    return this.http.post("http://localhost:4000/users/dodaj", data)
  }

  getAllKorisnici(){
    return this.http.get<User[]>("http://localhost:4000/users/getAllKorisnici")
  }

  getUser(username: string){
    let data = {
      username: username
    }
    return this.http.post<User>("http://localhost:4000/users/getUser", data)
  }

  kupi(usernameKojiKupuje: string, usernameKomeSeKupuje:string, cena: number, proizvodKojiSeKupuje:string){
    let data = {
      usernameKojiKupuje:usernameKojiKupuje,
      usernameKomeSeKupuje:usernameKomeSeKupuje,
      cena:cena,
      proizvodKojiSeKupuje:proizvodKojiSeKupuje
    }
    return this.http.post("http://localhost:4000/users/kupi", data)
  }

  kupiAnonimno(usernameKojiKupuje: string, usernameKomeSeKupuje:string, cena: number, proizvodKojiSeKupuje:string){
    let data = {
      usernameKojiKupuje:usernameKojiKupuje,
      usernameKomeSeKupuje:usernameKomeSeKupuje,
      cena:cena,
      proizvodKojiSeKupuje:proizvodKojiSeKupuje
    }
    return this.http.post("http://localhost:4000/users/kupiAnonimno", data)
  }
}
