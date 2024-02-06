import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KupacComponent } from './kupac/kupac.component';
import { LoginComponent } from './login/login.component';
import { ProdavacComponent } from './prodavac/prodavac.component';
import { PorudzbineComponent } from './porudzbine/porudzbine.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "kupac", component: KupacComponent },
  { path: "prodavac", component: ProdavacComponent},
  { path: "porudzbine", component: PorudzbineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }