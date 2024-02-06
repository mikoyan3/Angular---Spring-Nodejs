import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor (private userServis: UserService, private router: Router){}
  ngOnInit(): void {
    this.clan = ""
    this.vodja = ""
    this.username = ""
    this.password = ""
  }
  username: string = "";
  password: string = "";
  clan: string = "";
  vodja: string = ""
  message: string;

  login(){
    if(this.username == "" || this.password == "" || (this.clan == "" && this.vodja == "")){
      this.message = "Niste uneli sve podatke"
    }else{
        this.userServis.login(this.username, this.password, this.clan=="clan" ? "clan" : "vodja").subscribe((u: User)=>{
          console.log(this.clan);
          console.log(this.vodja);
          console.log(u);
          if(u == null) {
            this.message = "Pogresno uneti podaci";
            this.ngOnInit();
          } else if (this.clan == "clan") {
            localStorage.setItem('ulogovan', JSON.stringify(u));
            this.router.navigate(['clan']);
          } else {
            localStorage.setItem('ulogovan', JSON.stringify(u));
            this.router.navigate(['vodja']);
          }
        })
    }
  }

}
