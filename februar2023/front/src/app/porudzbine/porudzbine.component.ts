import { Component, OnInit } from '@angular/core';
import { Proizvodi } from '../models/proizvodi';
import { User } from '../models/korisnici';
import { ProizvodService } from '../services/proizvod.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-porudzbine',
  templateUrl: './porudzbine.component.html',
  styleUrls: ['./porudzbine.component.css']
})
export class PorudzbineComponent implements OnInit{

  constructor(private proizvodiServis: ProizvodService, private userService: UserService, private router: Router){}

  ngOnInit(): void {
    let korisnik = localStorage.getItem('ulogovan')
    if(korisnik!=null) this.kupac = JSON.parse(korisnik)
    let porudzbine = localStorage.getItem('porudzbine')
    if(porudzbine!=null) this.listaProizvoda = JSON.parse(porudzbine)
  }
  
  listaProizvoda: Proizvodi[];
  kolicina:number[] = [];
  kupac: User;
  message: string = ""

  kupi(): void{
    let flag = false;
    for(let index = 0; index<this.listaProizvoda.length; index++){
      if(this.kolicina[index]>this.listaProizvoda[index].stanje){
        this.message = "Nedovoljno na stanju"
        flag = true;
      }
    }
    if(flag == false){
      this.proizvodiServis.dodajProizvode(this.listaProizvoda, this.kolicina, this.kupac).subscribe(resp=>{
        this.message = resp.toString();
        this.ngOnInit();
      })
    }
  }

}
