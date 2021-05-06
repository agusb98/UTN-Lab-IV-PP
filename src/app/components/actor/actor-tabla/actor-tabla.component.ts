import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-tabla',
  templateUrl: './actor-tabla.component.html',
  styleUrls: ['./actor-tabla.component.css']
})
export class ActorTablaComponent implements OnInit {

  listadoActores$: Observable<any[]>;
  @Output() actorSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor(actorService: ActorService) {
    this.listadoActores$ = actorService.getAll().valueChanges();
  }

  ngOnInit(): void {
  }

  mostrarDetalles(parametroActor) {
    this.actorSelected.emit(parametroActor);
  }
}