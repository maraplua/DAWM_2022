import { Carta } from './../interfaz/carta';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecursosService } from '../servicios/recursos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  cartas: Carta[] = [];  
  constructor(private activatedRoute: ActivatedRoute, private recursosService: RecursosService) { 
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.cartas = respuesta as Array<Carta>
    })
  }  
  id!: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get("id")!;      
    })
  }
}

  