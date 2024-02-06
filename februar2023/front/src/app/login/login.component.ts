import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/korisnici';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private servis: UserService, private ruter: Router) {}

  kor_ime: string;
  lozinka: string;
  tip: string;
  poruka: string

  prijavaNaSistem(){
    this.servis.login(this.kor_ime, this.lozinka).subscribe((korisnik: User)=>{
      if(!korisnik){
        this.poruka = "Korisnik ne postoji";
      }else{
        if(korisnik.tip != this.tip){
          this.poruka = "Tip korisnika pogresan";
        }else{
          this.poruka="";
          localStorage.setItem('ulogovan', JSON.stringify(korisnik));
          if(korisnik.tip == "kupac"){
            this.ruter.navigate(['kupac']);
          }else{
            this.ruter.navigate(['prodavac']);
          }
        }
      }
    })
  }
}
