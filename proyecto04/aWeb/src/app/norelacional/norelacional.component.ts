import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Norelacional } from '../interfaz/norelacional';
import { NdbService } from '../servicios/ndb.service';

@Component({
  selector: 'app-norelacional',
  templateUrl: './norelacional.component.html',
  styleUrls: ['./norelacional.component.css']
})
export class NorelacionalComponent  implements OnInit {
  ndb: Norelacional[] = [];
  constructor(private activatedRoute: ActivatedRoute, private ndbService: NdbService) {
    ndbService.obtenerDatos().subscribe(respuesta => {
      this.ndb = respuesta as Array<Norelacional>
    })
  }  

  customerNumber!: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.customerNumber = parametros.get("customerNumber")!;      
    })
  }
}
