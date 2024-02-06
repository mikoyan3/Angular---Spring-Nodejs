import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClanComponent } from './clan/clan.component';
import { VodjaComponent } from './vodja/vodja.component';

const routes: Routes = [
  {path: "", component:LoginComponent},
  {path: "clan", component: ClanComponent},
  {path: "vodja", component: VodjaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
