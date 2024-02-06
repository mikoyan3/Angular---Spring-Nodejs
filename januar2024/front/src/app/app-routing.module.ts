import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { KupacComponent } from './kupac/kupac.component';
import { ProdavacComponent } from './prodavac/prodavac.component';
import { UmetnineComponent } from './umetnine/umetnine.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "kupac", component: KupacComponent},
  {path: "prodavac", component: ProdavacComponent},
  {path: "umetnine", component: UmetnineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
