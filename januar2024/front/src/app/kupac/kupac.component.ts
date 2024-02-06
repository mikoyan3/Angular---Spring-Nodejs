import { Component, OnInit } from '@angular/core';
import { korisnici } from '../models/korisnici';
import { aukcije } from '../models/aukcije';
import { KorisnikService } from '../service/korisnik.service';
import { Router } from '@angular/router';
import { umetnine } from '../models/umetnine';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit{
  korisnik: korisnici = new korisnici();
  aukcije: aukcije[] = [];
  umetnine: umetnine[] = [];
  message: string = "";

  constructor(private userService: KorisnikService, private router: Router){}
  ngOnInit(): void {
    let usr = localStorage.getItem('ulogovan');
    if(usr!=null) this.korisnik = JSON.parse(usr);
    this.userService.getAktivneAukcije().subscribe((a: aukcije[])=>{
      this.aukcije = a;
      this.userService.dohvatiKupljeneUmetnine(this.korisnik.korisnicko_ime).subscribe((u: umetnine[])=>{
        if(u.length == 0) this.message="Nema kupljenih umetnina";
        this.umetnine = u;
      })
    })
  }

  dohvatiUmetnine(a: aukcije){
    localStorage.setItem('aukcija', JSON.stringify(a));
    this.router.navigate(['umetnine']);
  }
}
