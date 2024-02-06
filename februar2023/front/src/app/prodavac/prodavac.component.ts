import { Component, OnInit } from '@angular/core';
import { ProdavacService } from '../services/prodavac.service';
import { User } from '../models/korisnici';
import { Narudzbine } from '../models/narudzbine';
import { ProizvodService } from '../services/proizvod.service';
import { Proizvodi } from '../models/proizvodi';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements OnInit{
  constructor(private prodavacService: ProdavacService, private proizvodService: ProizvodService){}
  korisnik: User;
  narudzbine: Narudzbine[];
  proizvodi: Proizvodi[] = [];
  kolicina: number[] = [];
  ngOnInit(): void {
    let logged = localStorage.getItem('ulogovan');
    if(logged!=null) this.korisnik = JSON.parse(logged)
    this.prodavacService.getAllNarudzbine().subscribe(lista=>{
      this.narudzbine = lista;
      this.narudzbine.forEach(n=>{
        let uk = 0;
        n.proizvodi.forEach(p=>{
          uk += parseInt(p.kolicina)
        })
        n.kolicina = uk;
      })
      this.proizvodService.getAllProizvodi().subscribe(pr=>{
        this.proizvodi = pr;
      })
    })
  }

  dodaj(): void{
    this.prodavacService.dodajStanje(this.proizvodi, this.kolicina).subscribe(res=>{
      this.ngOnInit();
    })
  }
  
}
