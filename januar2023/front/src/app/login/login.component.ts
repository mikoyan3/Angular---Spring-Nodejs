import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { User } from '../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginServis: LoginService, private router:Router){}
  username: string;
  password: string;
  admin: boolean;
  poruka: string;

  login(): void{
    this.loginServis.login(this.username, this.password).subscribe((user: User)=>{
      if(!user){
        this.poruka = "Pogresno uneti podaci"
      } else{
        if(this.admin == true){
          if(user.tip == "administrator"){
            this.poruka = ""
            localStorage.setItem('ulogovan', JSON.stringify(user));
            this.router.navigate(['admin']);
          } else{
            this.poruka = "Korisnik nije administrator"
          }
        } else{
          if(user.tip == "registrovani"){
            this.poruka=""
            localStorage.setItem('ulogovan', JSON.stringify(user));
            this.router.navigate(['user'])
          } else{
            this.poruka = "Korisnik nije registrovani"
          }
        }
      }
    })
  }
}
