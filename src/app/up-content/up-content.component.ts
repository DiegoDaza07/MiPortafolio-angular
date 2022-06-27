import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-up-content',
  templateUrl: './up-content.component.html',
  styleUrls: ['./up-content.component.css']
})
export class UpContentComponent implements OnInit {

salir(){
  this.servicio.cambio(false);
}

  constructor(public servicio:ServiciosService) { }

  ngOnInit(): void {
  }

}