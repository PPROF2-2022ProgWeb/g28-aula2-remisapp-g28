import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { Navbar2Component } from './layout/navbar2/navbar2.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component'
import { IniciarsesionComponent } from './pages/iniciarsesion/iniciarsesion.component'


@NgModule({
  declarations: [
    HeaderComponent,
    Navbar2Component,
    NavbarComponent,
    SobrenosotrosComponent,
    RegistrarseComponent,
    IniciarsesionComponent,
    ContactoComponent,
    FooterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
