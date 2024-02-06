import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllSorted(){
    return this.http.get<User[]>("http://localhost:4000/users/getAllKorisniciSorted");
  }

  uplati(k: User){
    let data = {
      username: k.korisnickoIme
    }
    return this.http.post("http://localhost:4000/users/uplati", data)
  }
}
