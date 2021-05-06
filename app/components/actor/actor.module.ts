import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { ActorTableComponent } from './actor-table/actor-table.component';

@NgModule({
  imports: [
    CommonModule,
    ActorRoutingModule,
  ],
  declarations: [
    ActorAltaComponent,
    ActorListadoComponent,
    ActorTableComponent,
  ]
})
export class ActorModule { }
