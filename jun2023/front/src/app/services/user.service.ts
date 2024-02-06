import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  url = 'http://localhost:4000'
  
  login(username: string, password: string, tip: string){
    let data = {
      username: username,
      password: password,
      tip: tip
    }
    return this.http.post<User>("http://localhost:8080/users/login", data);
  }

  dohvatiClanoveTima(tim: number){
    let data = {
      tim: tim
    }
    return this.http.post<User[]>("http://localhost:8080/users/dohvatiClanoveTima", tim);
  }
}
