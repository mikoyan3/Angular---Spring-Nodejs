import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { korisnici } from '../models/korisnici';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  korisnicko_ime: string = "";
  lozinka: string = "";
  tip: string = "";
  message: string = "";
  
  constructor(private userService: UserService, private router: Router){}

  login(){
    if(this.korisnicko_ime=="" || this.lozinka == "" || this.tip == "") this.message = "Nisu uneti svi podaci"
    else{
      let kor: korisnici = {
        kor_ime: this.korisnicko_ime,
        ime: "",
        lozinka: this.lozinka,
        mejl: "",
        prezime: "",
        datum_rodjenja: new Date(),
        tip: this.tip
      }
      this.userService.login(kor).subscribe((k: korisnici)=>{
        if(k!=null){
          this.message = ""
          localStorage.setItem('ulogovan', JSON.stringify(k));
          if(k.tip == "kupac"){
            this.router.navigate(['kupac'])
          } else{
            this.router.navigate(['prodavac'])
          }
        }else{
          this.message="Pogresni podaci"
        }
      })
    }
  }
}
