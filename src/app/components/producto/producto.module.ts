import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoAltaComponent } from './producto-alta/producto-alta.component';
import { ProductoListadoComponent } from './producto-listado/producto-listado.component';
import { ProductoTablaComponent } from './producto-tabla/producto-tabla.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    ProductoRoutingModule,
  ],
  declarations: [
    ProductoAltaComponent,
    ProductoListadoComponent,
    ProductoTablaComponent,
    ProductoDetalleComponent,
  ]
})
export class ProductoModule { }
