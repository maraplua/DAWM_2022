import { Component } from '@angular/core';
import { RecursosService } from 'src/app/servicios/recursos.service';
import { Carta } from '../interfaz/carta';
@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  cartas: Carta[] = [];  
  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.cartas = respuesta as Array<Carta>
    })
  }

}
