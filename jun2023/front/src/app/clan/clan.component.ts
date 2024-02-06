import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { TaskService } from '../services/task.service';
import { task } from '../models/task';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit{
  korisnik: User;
  clanovi: User[];
  clanTima: string;
  sadrzaj: string;
  licni: task[];
  delegirani: task[];
  obavljeni: task[];

  constructor(private userServis: UserService, private taskServis: TaskService){}

  ngOnInit(): void {
    let usr = localStorage.getItem('ulogovan');
    if(usr!=null) this.korisnik = JSON.parse(usr);
    this.userServis.dohvatiClanoveTima(this.korisnik.tim).subscribe((u: User[])=>{
      this.clanovi = u;
      this.taskServis.dohvatiDelegiraneZadatke(this.korisnik.korisnicko_ime).subscribe((tasks: task[])=>{
        this.delegirani = tasks;
        this.taskServis.dohvatiLicneZadatke(this.korisnik.korisnicko_ime).subscribe((lic: task[])=>{
          this.licni = lic;
          this.taskServis.dohvatiObavljeneZadatke(this.korisnik.korisnicko_ime).subscribe((ob: task[])=>{
            this.obavljeni = ob;
          })
        })
      })
    })
  }
  
  dodajZadatak(){
    // clanTima = dodeljen
    // sadrzaj = sadrzaj
    // clanTima == korisnik -> licni else delegiran
    console.log(this.clanTima);
    if(this.clanTima == this.korisnik.korisnicko_ime){
      this.taskServis.dodajZadatak(this.sadrzaj, "licni", this.korisnik.korisnicko_ime).subscribe(()=>{
        console.log("proslo")
      })
    } else {
      this.taskServis.dodajZadatak(this.sadrzaj, "delegiran", this.clanTima).subscribe(()=>{
        console.log("proslo")
      })
    }
  }

  obavi(t: task){
    this.taskServis.obaviZadatak(t.sadrzaj, t.obavljen, t.tip, t.dodeljen).subscribe(()=>{
      this.ngOnInit()
    })
  }

  obrisi(t: task){
    this.taskServis.obrisiZadatak(t.sadrzaj, t.obavljen, t.tip, t.dodeljen).subscribe(()=>{
      this.ngOnInit()
    })
  }

  neobavi(t: task){
    this.taskServis.neobaviZadatak(t.sadrzaj, t.obavljen, t.tip, t.dodeljen).subscribe(()=>{
      this.ngOnInit()
    })
  }
}
