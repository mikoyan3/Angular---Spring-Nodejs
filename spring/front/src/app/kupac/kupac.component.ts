import { Component, OnInit } from '@angular/core';
import { ProizvodiService } from '../services/proizvodi.service';
import { korisnici } from '../models/korisnici';
import { proizvodi } from '../models/proizvodi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit{
  constructor(private proizvodiServis: ProizvodiService, private router: Router){}
  k: korisnici;
  proizvodi: proizvodi[] = [];
  checkbox: boolean[] = [];
  kolicina: number[] = [];
  message: string = "";
  ngOnInit(): void {
    let kor = localStorage.getItem('ulogovan');
    if(kor!=null) this.k = JSON.parse(kor);
    this.proizvodiServis.getAllProizvodi().subscribe((p: proizvodi[])=>{
      this.proizvodi = p;
      for(let i = 0; i<this.proizvodi.length; i++){
        this.checkbox[i]=false;
        this.kolicina[i]=0;
      }
    })
  }
  naruci(){
    if(this.checkbox.length==0){
      this.message = "Ni jedan proizvod nije cekiran";
    } else if (this.kolicina.length == 0){
      this.message = "Niste uneli kolicinu"
    } else{
      this.message = ""
      localStorage.setItem('checkbox', JSON.stringify(this.checkbox));
      localStorage.setItem('kolicina', JSON.stringify(this.kolicina));
      localStorage.setItem('proizvodi', JSON.stringify(this.proizvodi));
      this.router.navigate(['proizvodi'])
    }
  }
}
