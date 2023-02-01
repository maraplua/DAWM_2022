import { Component } from '@angular/core';
import { DbService } from '../servicios/db.service';
import { Customer } from '../interfaz/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.css']
})
export class DbComponent {
  db: Customer[] = [];
  constructor(private activatedRoute: ActivatedRoute, private ndbService: DbService) {
    ndbService.obtenerDatos().subscribe(respuesta => {
      this.db = respuesta as Array<Customer>
    })
  }  

}
