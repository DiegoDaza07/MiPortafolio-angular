import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-center-content',
  templateUrl: './center-content.component.html',
  styleUrls: ['./center-content.component.css']
})

export class CenterContentComponent implements OnInit {


  

//comienzo de variables 


  texto_sobre_mi: string = "Soy una persona responsable, emprendedor, con facilidad de aprendizaje, Trabajo en equipo y liderazgo en organizaciones. Soy muy entregado a los deberes en mis estudios, me siento muy realizado Con cada logro obtenido.";
  mi_nombre = "JUAN DIEGO GARZON DAZA";
  domicilio = "FEDERICO LACROZE 3122";
  correo = "DIEGODAZA07@GMAIL.COM";
  numero_de_documento = "959";
  telefono = "1127532627";

//hasta aqui variables de datos personales

  experiencia= "";

  empresa1 = "Fimtec ltda"; 
  cargo1 = "Tecnico Electricista";
  jefe_inmediato1 = "Elidoro Torrejano";
  pagina_web1 = "http://fimtecltda.com/web/";
  tiempo_laborado1 = "1 año";
  

  experiencia2:boolean = false;
  empresa2 = ""; 
  cargo2 = "";
  jefe_inmediato2 = "";
  pagina_web2 = "";
  tiempo_laborado2 = "";

  experiencia3:boolean = false;
  empresa3 = ""; 
  cargo3 = "";
  jefe_inmediato3 = "";
  pagina_web3 = "";
  tiempo_laborado3 = "";

  experiencia4:boolean = false;
  empresa4 = ""; 
  cargo4 = "";
  jefe_inmediato4 = "";
  pagina_web4 = "";
  tiempo_laborado4 = "";

  //Hasta aqui variables de experiencia

  educacion = "";


  educacion1:boolean = true;
  institucion1 = "I.E.D ROGRIGO LARA BONILLA";
  nivel1 = "Secundario Tecnico";
  titulo1 = "Tecnico Instalaciones Electricas";
  tiempo1 = "2 años";

  educacion2:boolean = true;
  institucion2 = "SENA CEET";
  nivel2 = "TECNICATURA";
  titulo2 = "TECNICATURA EN ELECTRICIDAD INDUSTRIAL";
  tiempo2 = "3 AÑOS";

  educacion3:Boolean = false;
  institucion3 = "";
  nivel3 = "";
  titulo3 = "";
  tiempo3 = "";

  educacion4:boolean = false;
  institucion4 = "";
  nivel4 = "";
  titulo4 = "";
  tiempo4 = "";
  
  educacion5:boolean = false;
  institucion5 = "";
  nivel5 = "";
  titulo5 = "";
  tiempo5 = "";
  
  educacion6 = "";
  institucion6 = "";
  nivel6 = "";
  titulo6 = "";
  tiempo6 = "";

  educacion7:boolean = false;
  institucion7 = "";
  nivel7 = "";
  titulo7 = "";
  tiempo7 = "";

  educacion8:boolean = false;
  institucion8 = "";
  nivel8 = "";
  titulo8 = "";
  tiempo8 = "";

//hasta aqui variables de educacion

proyectos = "";

proyecto1:boolean = true;
nombre_proyecto1 = "PORTAFOLIO";
acerca_de1 = "Portafolio donde se mostrara un poco sobre mi. proyecto desarrolado como trabajo final del curso #yoprogramo2";
link_github1 = "pediente";

proyecto2:boolean = false;
nombre_proyecto2 = "";
acerca_de2 = "";
link_github2 = "";

//hasta aqui variables de proyectos

private user = "admin";
private password = "1234"

  usuario = "";
  
  contrasena = "";

  
  
  registrado = false;

salir(){

  this.registrado = false;
  alert("hasta pronto");
  this.contrasena = "";
}

guardar(){
  alert("aun estamos estudiando bases de datos, por ahora no podremos guardar los cambios");
}

cancelar(){

  this.registrado = false;
  this.contrasena = "";

}


 registro()
 {
   this.registrado = !this.registrado;
 }


getadministrador(){

  if(this.usuario==this.user && this.contrasena==this.password)
  {
    alert("iniciado con exito");
    this.registrado = true;
  }
  else 
  {

    alert("usuario o contraseña invalido");
    this.registrado = false;
  }
}










  constructor() 
  { 

  }

  ngOnInit(): void {

  
  }


}





