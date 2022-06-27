import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  

  registrado:boolean = false;



  cambio(estado:boolean){


  this.registrado = estado;
  
  }

  constructor() {  }

}
