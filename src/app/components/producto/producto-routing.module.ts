import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { ProductoAltaComponent } from './producto-alta/producto-alta.component';
import { ProductoListadoComponent } from './producto-listado/producto-listado.component';


//  Send unauthorized users to login
const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['user/login']);

const routes: Routes = [
  { path: '', redirectTo: 'producto/listado' },
  { path: 'listado', component: ProductoListadoComponent, ...canActivate(redirectUnauthorizedToLogin)  },
  { path: 'alta', component: ProductoAltaComponent , ...canActivate(redirectUnauthorizedToLogin) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
