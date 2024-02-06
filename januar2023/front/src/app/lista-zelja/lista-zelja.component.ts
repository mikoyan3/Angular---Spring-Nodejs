import { Component, OnInit } from '@angular/core';
import { Object } from '../models/object';
import { UserService } from '../services/user.service';
import { User } from '../models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-zelja',
  templateUrl: './lista-zelja.component.html',
  styleUrls: ['./lista-zelja.component.css']
})
export class ListaZeljaComponent implements OnInit{
  objekti:Object[];
  korisnikZaListu: User;
  logged: User;
  constructor(private userServis: UserService, private router: Router){}
  ngOnInit(): void {
    let korisnik = localStorage.getItem('korisnikZaKogaJeLista');
    if(korisnik != null) this.korisnikZaListu = JSON.parse(korisnik);
    let ulog = localStorage.getItem('ulogovan');
    if(ulog != null) this.logged = JSON.parse(ulog);
    this.userServis.getListaZelja(this.korisnikZaListu).subscribe((list: Object[])=>{
      this.objekti = list;
    })
  }

  kupi(o: Object): void{
    this.userServis.kupi(this.logged.korisnickoIme, this.korisnikZaListu.korisnickoIme, o.cena, o.proizvod).subscribe(resp=>{
      console.log(resp);
    });
  }

  kupiAnonimno(o: Object): void{
    this.userServis.kupiAnonimno(this.logged.korisnickoIme, this.korisnikZaListu.korisnickoIme, o.cena, o.proizvod).subscribe(resp=>{
      console.log(resp);
    });
  }

  nazad(): void{
    localStorage.removeItem('korisnikZaKogaJeLista');
    this.router.navigate(['user'])
  }
}
