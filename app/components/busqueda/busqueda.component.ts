import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  title = 'Ejemplo  @Input()  @Output()  ';
  film: Pelicula;
  list: Observable<any[]>;

  constructor(private peliculaService: PeliculaService) {
    this.list = this.peliculaService.getAll(); //DE ACA OBTIENE PELIS    
  }

  getDetailes(NuevaPeli: Pelicula) {    
    this.film = NuevaPeli;
  }

  showFilm(parametroPelicula: Pelicula) {
    //this.list.push(parametroPelicula);
  }



  ngOnInit(): void {
  }
}
