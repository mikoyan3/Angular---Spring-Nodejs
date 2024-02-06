import { Component } from '@angular/core';
import { KorisnikService } from '../service/korisnik.service';
import { Router } from '@angular/router';
import { korisnici } from '../models/korisnici';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userServis: KorisnikService, private router: Router){}
  username: string = "";
  password: string = "";
  tip: string = "";
  message: string = "";

  login(){
    if(this.username == "" || this.password == "" || this.tip == ""){
      this.message = "Niste uneli sve podatke"
    } else {
      this.userServis.login(this.username, this.password, this.tip).subscribe((k:korisnici)=>{
        if(k == null) this.message = "Ne postoji korisnik";
        else {
          this.message = "";
          localStorage.setItem('ulogovan', JSON.stringify(k));
          if(k.tip == "kupac"){
            this.router.navigate(['kupac'])
          } else {
            this.router.navigate(['prodavac'])
          }
        }
      })
    }
  }
}
