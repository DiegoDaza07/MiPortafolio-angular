import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiciosService } from '../servicios.service';


@Component({
  selector: 'app-center-content',
  templateUrl: './center-content.component.html',
  styleUrls: ['./center-content.component.css']
})

export class CenterContentComponent implements OnInit {

    
  constructor(private servicio:ServiciosService) 
  { 
  
  }



  ngOnInit(): void {

  
  }


}





