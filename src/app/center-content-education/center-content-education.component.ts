import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { educacion} from '../objetos.model';

@Component({
  selector: 'app-center-content-education',
  templateUrl: './center-content-education.component.html',
  styleUrls: ['./center-content-education.component.css']
})
export class CenterContentEducationComponent implements OnInit {

educaciones:educacion[] = [

   new educacion("Argentina Programa", "Certificado-Curso", "Fulll Stack-Web", "1 año"),

  ];

  agregarEducacion(){

    this.educaciones.push(new educacion(this.institucion, this.nivel, this.titulo, this.tiempo));
  }

  eliminarEducacion(a: number){

    this.educaciones.splice(a, 1);

  }


  institucion = "";
  titulo = "";
  nivel = "";
  tiempo = "";

  

  constructor(public servicio:ServiciosService) { }

  ngOnInit(): void {
  }

}
