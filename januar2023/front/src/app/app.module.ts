import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { ListaZeljaComponent } from './lista-zelja/lista-zelja.component';
//import { KupacComponent } from './kupac/kupac.component';
//import { RadnikComponent } from './radnik/radnik.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdministratorComponent,
    ListaZeljaComponent,
   // KupacComponent,
    //RadnikComponent,
    //LoginComponent,
   // LoginComponent,
    //KupacComponent,
    //RadnikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }