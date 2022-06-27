import { Component, OnInit } from '@angular/core';
import { proyecto } from '../objetos.model';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-center-content-project',
  templateUrl: './center-content-project.component.html',
  styleUrls: ['./center-content-project.component.css']
})
export class CenterContentProjectComponent implements OnInit {

  proyectos:proyecto[] = [

    new proyecto("Portafolio De Servicios Web", "Portafolio creado en Angular Su front, con el fin de mostrar este proyecto jeje cambiaremos esto", "https://github.com/DiegoDaza07/MiPortafolio-angular"),
 
   ];
 
   agregarProyecto(){
 
     this.proyectos.push(new proyecto(this.nombre, this.acerca, this.git));
   }
 
   eliminarProyecto(a: number){
 
     this.proyectos.splice(a, 1);
 
   }
   
 
   nombre = "";
   acerca = "";
   git = "";
 
   
 

  constructor(public servicio:ServiciosService) { }

  ngOnInit(): void {
  }

}
