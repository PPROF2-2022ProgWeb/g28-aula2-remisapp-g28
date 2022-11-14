import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { CarritoComponent } from './carrito/carrito.component';
import { TiendaComponent } from './tienda/tienda.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';



@NgModule({
  declarations: [
    SobrenosotrosComponent,
    ContactoComponent,
    RegistrarseComponent,
    IniciarsesionComponent,
    CarritoComponent,
    TiendaComponent,
    DashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
