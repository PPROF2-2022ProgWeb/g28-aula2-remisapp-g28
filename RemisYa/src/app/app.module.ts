import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { Navbar2Component } from './layout/navbar2/navbar2.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component'
import { IniciarsesionComponent } from './pages/iniciarsesion/iniciarsesion.component'
import { TiendaComponent } from './pages/tienda/tienda.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    HeaderComponent,
    Navbar2Component,
    NavbarComponent,
    SobrenosotrosComponent,
    TiendaComponent,
    RegistrarseComponent,
    IniciarsesionComponent,
    ContactoComponent,
    FooterComponent,
    AppComponent,
    DashboardComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
