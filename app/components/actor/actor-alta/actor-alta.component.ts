import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/models/actor';
import { Pais } from 'src/app/models/pais';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  public form: FormGroup;
  public countrySelected: Pais;

  public unActor: Actor;

  public constructor(
    private formBuilder: FormBuilder,
    private actorService: ActorService
  ) { this.unActor = new Actor(); }

  ngOnInit() {
    this.form = this.createValidators(this.formBuilder)
  }

  createValidators(formBuilder: FormBuilder) {
    return formBuilder.group({
      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      'sexo': ['', Validators.required],
      'nacionalidad': ['', Validators.required],
      'terminos': ['', Validators.required]
    })
  }

  create() {
    this.unActor = this.toUpperValues(this.unActor); 
    this.actorService.create(this.unActor);
    this.form.reset();
  }

  selectCountry(country: Pais) {
    this.unActor.nacionalidad = country.name
  }

  toUpperValues(actor: Actor) {
    actor.nombre = actor.nombre.toLocaleUpperCase();
    actor.apellido = actor.apellido.toLocaleUpperCase();
    actor.nacionalidad = actor.nacionalidad.toLocaleUpperCase();
    actor.sexo = actor.sexo.toLocaleUpperCase();
    return actor;
  }
}