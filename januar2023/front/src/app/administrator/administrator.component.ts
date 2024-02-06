import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { User } from '../models/users';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit{
  korisnici: User[];
  constructor(private router: Router, private adminServis: AdminService){}


  ngOnInit(): void {
    this.adminServis.getAllSorted().subscribe((u: User[])=>{
      this.korisnici = u;
    })
  }

  odjaviSe(): void{
    localStorage.clear();
    this.router.navigate([""])
  }

  uplati(k: User): void{
    this.adminServis.uplati(k).subscribe(resp=>{
      console.log(resp);
    })
  }
}
