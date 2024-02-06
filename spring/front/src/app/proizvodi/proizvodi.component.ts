import { Component, OnInit } from '@angular/core';
import { proizvodi } from '../models/proizvodi';
import { ProizvodiService } from '../services/proizvodi.service';
import { korisnici } from '../models/korisnici';

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent implements OnInit{
  proizvodi: proizvodi[] = [];
  kolicina: number[] = [];
  odradjeno: boolean = false;
  korisnik: korisnici;

  constructor(private proizvodiServis: ProizvodiService){}

  ngOnInit(): void {
    let user = localStorage.getItem('ulogovan');
    if(user!=null) this.korisnik = JSON.parse(user);
    let pr = localStorage.getItem('proizvodi');
    let counter = 0;
    if(pr!=null && this.odradjeno == false){
      let proiz = JSON.parse(pr);
      let cb = localStorage.getItem('checkbox');
      if(cb!=null){
        let check = JSON.parse(cb);
        let k = localStorage.getItem('kolicina');
        if(k!=null){
          let kol = JSON.parse(k);
          for(let i = 0; i < check.length; i++){
            if(check[i]==true){
              this.kolicina.push(kol[i]);
              this.proizvodi.push(proiz[i]);
            }
          }
        }
      }
    }
    this.odradjeno = true;
  }

  ukloni(i: number){
    this.proizvodi.splice(i, 1);
    this.kolicina.splice(i, 1);
  }

  naruci(){
    this.proizvodiServis.dodajNarudzbinu(this.korisnik, this.proizvodi, this.kolicina).subscribe();
  }
}
