import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { KupacComponent } from './kupac/kupac.component';
import { ProdavacComponent } from './prodavac/prodavac.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UmetnineComponent } from './umetnine/umetnine.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KupacComponent,
    ProdavacComponent,
    UmetnineComponent
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
