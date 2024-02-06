import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/korisnici';
import { Proizvodi } from '../models/proizvodi';
import { ProizvodService } from '../services/proizvod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit{
  constructor(private userService: UserService, private proizvodService: ProizvodService, private router: Router){}
  logged: User;
  proizvodi: Proizvodi[];
  listaZelja: Proizvodi[] = [];
  message: string = ""
  ngOnInit(): void {
    let korisnik = localStorage.getItem('ulogovan');
    if(korisnik!=null) this.logged = JSON.parse(korisnik);
    this.proizvodService.getAllProizvodi().subscribe((p: Proizvodi[])=>{
      this.proizvodi = p;
    })
  }

  dodajUListu(p: Proizvodi): void{
    console.log(p)
    this.listaZelja.push(p);
    console.log(this.listaZelja)
  }

  poruci(){
    if(this.listaZelja.length == 0) this.message = "Morate dodati barem jedan proizvod"
    else{
      this.message = ""
      localStorage.setItem('porudzbine', JSON.stringify(this.listaZelja))
      this.router.navigate(['porudzbine'])
    }
  }
}
