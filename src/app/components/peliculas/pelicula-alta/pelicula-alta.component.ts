import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/models/actor';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  public formFilm: FormGroup;
  public film: Pelicula = new Pelicula();

  constructor(
    private formBuild: FormBuilder, 
    private peliculaService: PeliculaService
  ) { }

  addActor(actor: Actor) {
   this.film.protagonista = actor.nombre + ' ' +  actor.apellido;
  }

  ngOnInit() {
    this.formFilm = this.formBuild.group({
      'nombre': ['', Validators.required],
      'tipo': ['', Validators.required],
      'fechaEstreno': ['', [Validators.required]],
      'cantidadPublico': ['', [Validators.required, Validators.min(1), Validators.max(5000)]],
      'pathFoto': ['', Validators.required],
      'protagonista': ['', Validators.required]
    })
  }

  create() {
    this.film = this.toUpperValues(this.film); 
    this.peliculaService.create(this.formFilm.getRawValue());
    this.formFilm.reset();
  }

  toUpperValues(film: Pelicula){
    film.tipo = film.tipo.toLocaleUpperCase();
    film.protagonista = film.protagonista.toLocaleUpperCase();
    return film;
  }
}