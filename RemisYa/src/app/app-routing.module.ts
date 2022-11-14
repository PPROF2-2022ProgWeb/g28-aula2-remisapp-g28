import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IniciarsesionComponent } from './pages/iniciarsesion/iniciarsesion.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: HeaderComponent, pathMatch: 'full' },
  { path: 'home', component: HeaderComponent, pathMatch: 'full' },
  { path: 'contact-us', component: ContactoComponent, pathMatch: 'full' },
  { path: 'shop', component: TiendaComponent, pathMatch: 'full' },
  { path: 'cart', component: CarritoComponent, pathMatch: 'full' },
  { path: 'Sobrenosotros', component: SobrenosotrosComponent, pathMatch: 'full' },
  { path: 'faqs', component: FooterComponent, pathMatch: 'full' },
  { path: 'blog', component: FooterComponent, pathMatch: 'full' },
  { path: 'account', component: FooterComponent, pathMatch: 'full' },
  { path: 'LogIn', component: IniciarsesionComponent, pathMatch: 'full' },
  { path: 'admin', component: DashboardComponent, pathMatch: 'full' }, //canActivate: [AdminGuard]
  { path: 'user-dashboard', component: UserDashboardComponent, pathMatch: 'full' }, //canActivate: [AdminGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
