import { Component, OnInit } from '@angular/core';
import { aukcije } from '../models/aukcije';
import { KorisnikService } from '../service/korisnik.service';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements OnInit{
  aukcije: aukcije[] = [];
  constructor(private userService: KorisnikService){}
  ngOnInit(): void {
    this.userService.dohvatiSveAukcije().subscribe((a: aukcije[])=>{
      this.aukcije = a;
      this.aukcije.forEach(auk=>{
        let today = new Date();
        let kraj = new Date(auk.kraj);
        if(kraj > today){
          auk.istekle = false;
        } 
        else {
          auk.istekle = true;
        }
      })
    })
  }

}
