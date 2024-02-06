import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { KupacComponent } from './kupac/kupac.component';
import { ProdavacComponent } from './prodavac/prodavac.component';
import { PorudzbineComponent } from './porudzbine/porudzbine.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KupacComponent,
    ProdavacComponent,
    PorudzbineComponent,
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
