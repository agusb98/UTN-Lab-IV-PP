import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  title = 'Ejemplo  @Input()  @Output()  ';
  product: Producto;
  list: Observable<any[]>;

  constructor(private productoService: ProductoService) {
    this.list = this.productoService.getAll().valueChanges(); //DE ACA OBTIENE PELIS    
  }

  getDetailes(product: Producto) {    
    this.product = product;
  }

  showSroduct(product: Producto) {
    //this.list.push(product);
  }



  ngOnInit(): void {
  }
}
