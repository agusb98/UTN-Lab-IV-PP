import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';

//  Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['user/login']);

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'producto/detalle', component: BusquedaComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'producto', loadChildren: () => import('../app/components/producto/producto-routing.module').then(m => m.ProductoRoutingModule) },
  { path: 'user', loadChildren: () => import('../app/components/users/user-routing.module').then(m => m.UserRoutingModule) },  
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
