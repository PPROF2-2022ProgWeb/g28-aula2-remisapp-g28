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
import { CarritoComponent } from './pages/carrito/carrito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { authInterceptorProviders } from './Services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { PerfilComponent } from './perfil/perfil.component';
import { TiendalogComponent } from './pages/tiendalog/tienda.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CrearProductoComponent } from './pages/producto/crear-producto.component';
import { ListaProductoComponent } from './pages/producto/lista-producto.component';

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
    CarritoComponent,
    UserDashboardComponent,
    PerfilComponent,
    TiendalogComponent,
    ListaProductoComponent,
    CrearProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,

  ],

  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    HttpClientModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
