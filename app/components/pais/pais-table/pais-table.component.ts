import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/models/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent implements OnInit {

  public list: any[] = [];
  @Output() selectEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private paisService: PaisService) {

    this.paisService.getAll().subscribe(
      (data: any) => {
        this.list = data;
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.paisService.getAll().subscribe;
  }

  emitCountry(country: Pais) {    
    this.selectEvent.emit(country);  
  }
}