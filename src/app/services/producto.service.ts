import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { ToastrService } from 'ngx-toastr';
import { Producto } from './../models/producto';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    pathCollection = '/productos';
    referenceToCollection: AngularFirestoreCollection<Producto>;
    referenciaBd: AngularFirestore;

    constructor(
        private angularFirestore: AngularFirestore,
        private toastrService: ToastrService
    ) {
        this.referenciaBd = angularFirestore;
        this.referenceToCollection = angularFirestore.collection(this.pathCollection);
    }

    async create(product: Producto): Promise<any> {
        try {
            await this.referenceToCollection.add({ ...product });
            this.toastrService.success('Producto Agregado con Exito', 'Status Producto');
        }
        catch (error) { this.toastrService.error(error.message, 'Status Producto'); }
        return;
    }

    public getAll() {
        return this.referenceToCollection;
    }

    public getOne(product: Producto) {
        return this.referenciaBd.collection(this.pathCollection, ref => ref
            .where("codigo", "==", product.codigo)
            .where("descipcion", "==", product.descipcion)
            .where("precio", "==", product.precio)
            .where("stock", "==", product.stock)
            .where("nacionalidad", "==", product.nacionalidad)
            .where("comestible", "==", product.comestible)
        );
    }
}