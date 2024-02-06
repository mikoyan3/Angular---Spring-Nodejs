import { Component, OnInit } from '@angular/core';
import { umetnine } from '../models/umetnine';
import { aukcije } from '../models/aukcije';
import { KorisnikService } from '../service/korisnik.service';

@Component({
  selector: 'app-umetnine',
  templateUrl: './umetnine.component.html',
  styleUrls: ['./umetnine.component.css']
})
export class UmetnineComponent implements OnInit{
  umetnine: umetnine[] = [];
  aukcija: aukcije = new aukcije();
  ponuda: number = -1;
  message: string = "";

  constructor(private userService: KorisnikService){}

  ngOnInit(): void {
    let auk = localStorage.getItem('aukcija');
    if(auk != null) this.aukcija = JSON.parse(auk);
    this.userService.dohvatiUmetnine(this.aukcija.idA).subscribe((u: umetnine[])=>{
      this.umetnine = u;
    })
  }

  potvrdi(u: umetnine){
    if(this.ponuda <= u.ponuda){
      this.message = "Ponuda je manja od trenutne";
    } else {
      this.message = "";
      this.userService.izmeniPonudu(u.idU, this.ponuda).subscribe();
    }
  }
}
