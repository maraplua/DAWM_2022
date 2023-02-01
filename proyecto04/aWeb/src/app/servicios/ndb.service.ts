import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NdbService {

  constructor(private http: HttpClient) { }
  obtenerDatos() {
    return this.http.get('https://apifb-72858-default-rtdb.firebaseio.com/sales.json')
  }
}
