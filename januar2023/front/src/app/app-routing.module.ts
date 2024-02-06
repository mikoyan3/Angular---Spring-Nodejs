import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { KupacComponent } from './kupac/kupac.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { ListaZeljaComponent } from './lista-zelja/lista-zelja.component';
//import { RadnikComponent } from './radnik/radnik.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "user", component: UserComponent },
  { path: "admin", component: AdministratorComponent },
  { path: "listaZelja", component: ListaZeljaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }