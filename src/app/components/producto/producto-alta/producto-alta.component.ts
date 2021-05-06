import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/models/pais';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-alta',
  templateUrl: './producto-alta.component.html',
  styleUrls: ['./producto-alta.component.css']
})
export class ProductoAltaComponent implements OnInit {
  public form: FormGroup;
  public countrySelected: Pais;
  public unProducto: Producto;

  public constructor(
    private formBuilder: FormBuilder,
    private productService: ProductoService
  ) { this.unProducto = new Producto(); }

  ngOnInit() {
    this.form = this.createValidators(this.formBuilder)
  }

  createValidators(formBuilder: FormBuilder) {
    return formBuilder.group({
      'codigo': ['', Validators.required],
      'descipcion': ['', Validators.required],
      'precio': [0, [Validators.required, Validators.min(1), Validators.max(100)]],
      'stock': [0, Validators.required],
      'nacionalidad': ['', Validators.required],
      'comestible': ['', Validators.required],
      'terminos': ['', Validators.required]
    })
  }

  create() {
    this.unProducto = this.toUpperValues(this.unProducto); 
    this.productService.create(this.unProducto);
    this.form.reset();
  }

  selectCountry(country: Pais) {
    this.unProducto.nacionalidad = country.name
  }

  toUpperValues(product: Producto) {
    product.codigo = product.codigo.toLocaleUpperCase();
    product.descipcion = product.descipcion.toLocaleUpperCase();
    product.nacionalidad = product.nacionalidad.toLocaleUpperCase();
    return product;
  }
}