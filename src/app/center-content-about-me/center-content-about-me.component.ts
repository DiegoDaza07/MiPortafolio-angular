import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-center-content-about-me',
  templateUrl: './center-content-about-me.component.html',
  styleUrls: ['./center-content-about-me.component.css']
})
export class CenterContentAboutMeComponent implements OnInit {

  usuario: string[] = [

    "Soy una persona responsable, emprendedor, con facilidad de aprendizaje, Trabajo en equipo y liderazgo en organizaciones. Soy muy entregado a los deberes en mis estudios, me siento muy realizado Con cada logro obtenido.",
    "JUAN DIEGO GARZON DAZA",
    "FEDERICO LACROZE 3122",
    "DIEGODAZA07@GMAIL.COM",
    "959",
    "1127532627"

  ]


  cambiar(a:number){

    if(this.cambio[a] == ""){

      alert("El campo esta Vacio");

    }

    else{

    this.usuario.splice(a, 1);
    this.usuario.splice(a, 0, this.cambio[a]);
    alert("Cambio con Exito");

    }
  }

 cambio:string []= [ "","","","","","",]

  




  constructor(public servicio:ServiciosService) { }

  ngOnInit(): void {
  }

}
