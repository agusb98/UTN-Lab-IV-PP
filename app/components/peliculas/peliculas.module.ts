import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { PeliculaTablaComponent } from './pelicula-tabla/pelicula-tabla.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    PeliculasRoutingModule,
  ],
  declarations: [
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    PeliculaTablaComponent,
    PeliculaDetalleComponent
  ]
})
export class PeliculaModule { }
