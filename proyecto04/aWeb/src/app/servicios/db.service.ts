import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }
  obtenerDatos() {
    return this.http.get('http://localhost:4444/customers')
  }
}


