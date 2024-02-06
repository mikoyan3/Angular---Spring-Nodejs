import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnici } from '../models/korisnici';
import { proizvodi } from '../models/proizvodi';
import { narudzbine } from '../models/narudzbine';

@Injectable({
  providedIn: 'root'
})
export class NarudzbineService {

  constructor(private http:HttpClient) { }

  getAllNarudzbine(){
    return this.http.get<narudzbine[]>("http://localhost:8080/narudzbine/getAllNarudzbine")
  }
}
