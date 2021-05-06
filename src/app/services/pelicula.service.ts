import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  pathOfCollection = '/film';
  referenceToCollection: AngularFirestoreCollection<Pelicula>;
  list:Observable<any[]>;

  constructor(
    private bd: AngularFirestore,
    private toastrService: ToastrService
  ) {
    this.referenceToCollection = bd.collection(this.pathOfCollection);
    this.list = this.referenceToCollection.valueChanges(this.pathOfCollection)
  }

  async create(pelicula: Pelicula): Promise<any> {
    try {
      await this.referenceToCollection.add({ ...pelicula });
      this.toastrService.success('Pelicula Agregada con Exito', 'Status Film');
    }
    catch (error) { this.toastrService.error(error.message, 'Status Film'); }
    return;
  }

  public getAll() {
    return this.list;
  }

  /* public getOne(title: string, actor: string) {
    return this.angularFirestore.collection(this.pathOfCollection, ref => ref.where("nombre", "==", title).where("apellido", "==", actor));
  } */

  public set() {

  }

  public delete() {

  }
}
