import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IniciarsesionComponent } from './pages/iniciarsesion/iniciarsesion.component';
import { CrearProductoComponent } from './pages/producto/crear-producto.component';
import { ListaProductoComponent } from './pages/producto/lista-producto.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { TiendalogComponent } from './pages/tiendalog/tienda.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminGuard } from './Services/admin.guard';
import { NormalGuard } from './Services/normal.guard';

const routes: Routes = [
  { path: '', component: HeaderComponent, pathMatch: 'full' },
  { path: 'home', component: HeaderComponent, pathMatch: 'full' },
  { path: 'contact-us', component: ContactoComponent, pathMatch: 'full' },
  { path: 'tienda', component: TiendaComponent, pathMatch: 'full' },
  { path: 'cart', component: CarritoComponent, pathMatch: 'full' },
  { path: 'Sobrenosotros', component: SobrenosotrosComponent, pathMatch: 'full' },
  { path: 'faqs', component: FooterComponent, pathMatch: 'full' },
  { path: 'registrarse', component: RegistrarseComponent, pathMatch: 'full' },
  { path: 'account', component: FooterComponent, pathMatch: 'full' },
  { path: 'LogIn', component: IniciarsesionComponent, pathMatch: 'full' },
  { path: 'admin', component: DashboardComponent, pathMatch: 'full', canActivate: [AdminGuard] }, //canActivate: [AdminGuard]
  { path: 'user-dashboard', component: UserDashboardComponent, pathMatch: 'full', canActivate: [NormalGuard] }, //canActivate: [AdminGuard]
  { path: 'perfil', component: PerfilComponent, pathMatch: 'full', canActivate: [NormalGuard] }, //canActivate: [AdminGuard]
  { path: 'tiendalog', component: TiendalogComponent, pathMatch: 'full'}, 
  {path:'crear', component: CrearProductoComponent, pathMatch: 'full'},
  {path:'lista', component: ListaProductoComponent, pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
