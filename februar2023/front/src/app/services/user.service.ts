import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/korisnici';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    const data = {
      kor_ime: username,
      lozinka: password
    }
    return this.http.post<User>("http://localhost:4000/users/login", data);
  }

  getUser(u: User){
    const data = {
      kor_ime: u.kor_ime
    }
    return this.http.post<User>("http://localhost:4000/users/getUser", data);
  }
}
