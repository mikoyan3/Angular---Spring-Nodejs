import { Component, OnInit } from '@angular/core';
import { narudzbineProizvod } from '../models/narudzbineProizvod';
import { korisnici } from '../models/korisnici';
import { ProizvodiService } from '../services/proizvodi.service';
import { NarudzbineService } from '../services/narudzbine.service';
import { narudzbine } from '../models/narudzbine';
import { proizvodi } from '../models/proizvodi';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements OnInit{
  narudzbine: narudzbineProizvod[] = [];
  korisnik: korisnici = new korisnici();
  najverniji: korisnici = new korisnici();
  constructor(private proizvodiService: ProizvodiService, private narudzbineService: NarudzbineService, private userService: UserService){}
  
  ngOnInit(): void {
    let usr = localStorage.getItem('ulogovan');
    if(usr!=null) this.korisnik = JSON.parse(usr);
    this.userService.getNajvernijeg().subscribe((k: korisnici)=>{

      this.najverniji.kor_ime = k.kor_ime;
      this.narudzbineService.getAllNarudzbine().subscribe((list: narudzbine[])=>{
        list.forEach(l=>{
          this.proizvodiService.getAllNaruceniProizvodi(l.idN).subscribe((p: proizvodi[])=>{
            let listaProizvoda: string[] = [];
            p.forEach(pr=>{
              listaProizvoda.push(pr.naziv)
            })
            let data: narudzbineProizvod = {
              kupac: l.kupac,
              datum: l.datum,
              proizvodi:listaProizvoda
            }
            this.narudzbine.push(data);
          })
        })
      })
    })
  }

}
