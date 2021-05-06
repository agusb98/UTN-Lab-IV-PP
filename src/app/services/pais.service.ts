import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  public pais = '';

  constructor(private http: HttpClient) { }

  public get() {
    return this.pais;
  }

  public set(pais: string) {
    this.pais = pais;
  }

  getAll() {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }

  getOne(pais: string) {
  }
}