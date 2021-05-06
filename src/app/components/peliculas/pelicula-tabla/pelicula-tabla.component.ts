import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-tabla',
  templateUrl: './pelicula-tabla.component.html',
  styleUrls: ['./pelicula-tabla.component.css']
})
export class PeliculaTablaComponent implements OnInit {

  @Input() listFilm: Observable<any>;
  @Output() filmSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor(private peliculaService: PeliculaService) {
    this.listFilm = this.peliculaService.getAll();
  }

  ngOnInit(): void {
  }

  emitFilm(film: Pelicula) {
    this.filmSelected.emit(film);
  }
}
