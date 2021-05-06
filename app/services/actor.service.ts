import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { ToastrService } from 'ngx-toastr';
import { Actor } from './../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  pathCollection = '/actores';
  referenceToCollection: AngularFirestoreCollection<Actor>;
  referenciaBd: AngularFirestore;

  constructor(
    private angularFirestore: AngularFirestore,
    private toastrService: ToastrService
  ) {
    this.referenciaBd = angularFirestore;
    this.referenceToCollection = angularFirestore.collection(this.pathCollection);
  }

  async create(actor: Actor): Promise<any> {
    try {
      await this.referenceToCollection.add({ ...actor });
      this.toastrService.success('Actor Agregado con Exito', 'Status Actor');
    }
    catch (error) { this.toastrService.error(error.message, 'Status Actor'); }
    return;
  }

  public getAll() {
    return this.referenceToCollection;
  }

  public getOne(actor: Actor) {
    return this.referenciaBd.collection(this.pathCollection, ref => ref
      .where("nombre", "==", actor.nombre)
      .where("apellido", "==", actor.apellido)
      .where("edad", "==", actor.edad)
      .where("sexo", "==", actor.sexo)
      .where("nacionalidad", "==", actor.nacionalidad)
    );
  }
}