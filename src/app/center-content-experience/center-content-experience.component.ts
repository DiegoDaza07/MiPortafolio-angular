import { Component, OnInit } from '@angular/core';
import { experiencia } from '../objetos.model';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-center-content-experience',
  templateUrl: './center-content-experience.component.html',
  styleUrls: ['./center-content-experience.component.css']
})
export class CenterContentExperienceComponent implements OnInit {

  experiencias:experiencia[] = [

    new experiencia("Fimtec LTDA", "Tecnico Electricista", "Eliodoro Torrejano", "http://fimtecltda.com/web/", "1 año"),
 
   ];
 
   agregarExperiencia(){
 
     this.experiencias.push(new experiencia(this.institucion, this.pagina, this.jefe, this.cargo, this.tiempo));
   }
 
   eliminarExperiencia(a: number){
 
     this.experiencias.splice(a, 1);
 
   }
   

   institucion = "";
   cargo = "";
   jefe = "";
   pagina = "";
   tiempo = "";
 



  constructor(public servicio:ServiciosService) { }

  ngOnInit(): void {
  }

}
