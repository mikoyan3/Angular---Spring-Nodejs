import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnici } from '../models/korisnici';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(k: korisnici){
    return this.http.post<korisnici>("http://localhost:8080/korisnici/login", k);
  }

  getNajvernijeg(){
    return this.http.get<korisnici>("http://localhost:8080/korisnici/getNajvernijeg")
  }
}
