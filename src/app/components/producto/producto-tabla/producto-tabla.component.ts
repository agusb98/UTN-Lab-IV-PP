import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styleUrls: ['./producto-tabla.component.css']
})
export class ProductoTablaComponent implements OnInit {

  listProductos$: Observable<any[]>;
  @Input() listToInput: Observable<any[]>;
  @Output() productSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor(productoService: ProductoService) {
    this.listProductos$ = productoService.getAll().valueChanges();
  }

  ngOnInit(): void {
  }

  mostrarDetalles(producto) {
    this.productSelected.emit(producto);
  }
}