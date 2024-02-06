import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-vodja',
  templateUrl: './vodja.component.html',
  styleUrls: ['./vodja.component.css']
})
export class VodjaComponent implements OnInit{
  constructor(private userServis: UserService, private taskServis: TaskService){}
  korisnik: User;
  clanovi: User[] = [];
  obavljeni: number[] = [];

  ngOnInit(): void {
    let usr = localStorage.getItem('ulogovan')
    if(usr!=null) this.korisnik = JSON.parse(usr);
    this.userServis.dohvatiClanoveTima(this.korisnik.tim).subscribe((u: User[])=>{
      u.forEach(us=>{
        if(us.korisnicko_ime != this.korisnik.korisnicko_ime) this.clanovi.push(us);
      })
      this.obavljeni.length = this.clanovi.length;
      for(let i = 0; i < this.clanovi.length; i++){
        this.taskServis.dohvatiObavljeneZadatke(this.clanovi[i].korisnicko_ime).subscribe((t: task[])=>{
          this.obavljeni[i] = t.length;
        })
      }
    })
  }

}
