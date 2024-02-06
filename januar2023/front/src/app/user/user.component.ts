import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/users';
import { Object } from '../models/object';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(private router: Router, private userServis: UserService, private loginServis: LoginService){}
  naziv: string;
  cena: number;
  ulogovan: User = new User();
  objekti: Object[] = [];
  korisnici: User[] = [];
  korisnik: string;

  ngOnInit(): void {
    let korisnik = localStorage.getItem('ulogovan');
    if(korisnik!=null){
      this.ulogovan = JSON.parse(korisnik);
    }
    this.userServis.getAllKorisnici().subscribe((k: User[])=>{
      k.forEach(p=>{
        if(p.korisnickoIme != this.ulogovan.korisnickoIme && p.tip != 'administrator'){
          this.korisnici.push(p)
        }
      })
    })
    this.userServis.getListaZelja(this.ulogovan).subscribe((o: Object[])=>{
      this.objekti = o;
    })
  }

  dodaj(): void{
    this.userServis.dodaj(this.ulogovan.korisnickoIme, this.naziv, this.cena).subscribe(resp=>{
      console.log(resp)
      this.ngOnInit();
    })
  }
  
  
  odjaviSe(): void{
    localStorage.clear();
    this.router.navigate([""])
  }

  vidiListu(): void{
    this.userServis.getUser(this.korisnik).subscribe((u: User)=>{
      localStorage.setItem('korisnikZaKogaJeLista', JSON.stringify(u))
      this.router.navigate(["listaZelja"])
    })
  }
}
