import { Component, Input, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';




@Component({
  selector: 'app-broswer',
  templateUrl: './broswer.component.html',
  styleUrls: ['./broswer.component.css']
})
export class BroswerComponent implements OnInit {

registrado = localStorage.getItem("registrado")  ;




  constructor(public servicio:ServiciosService) {
  
   }

  ngOnInit(): void {


    
  }

}
