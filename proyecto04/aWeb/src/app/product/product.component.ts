import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Norelacional } from '../interfaz/norelacional';
import { NdbService } from '../servicios/ndb.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ndb: Norelacional[] = [];
  constructor(private activatedRoute: ActivatedRoute, private ndbService: NdbService) {
    ndbService.obtenerDatos().subscribe(respuesta => {
      this.ndb = respuesta as Array<Norelacional>
    })
  }  

  productCode!: string;
  customerNumber!: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.productCode = parametros.get("productCode")!; 
      this.customerNumber = parametros.get("customerNumber")!;      
    })
  }

}
