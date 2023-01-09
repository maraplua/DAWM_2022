import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  position = {
    lat: -2.1478748 ,
    lng: -79.9667581
  }
  label = {
    color :'red',
    text :'Espol' 
  }

}
