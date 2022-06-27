import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-center-content-admin',
  templateUrl: './center-content-admin.component.html',
  styleUrls: ['./center-content-admin.component.css']
})
export class CenterContentAdminComponent implements OnInit {

user: string[] = [
"admin",
"1234"
];

cambio:string[] =[
  "", //usuario
  "", //contraseña
  "",//nuevo usuario
  "" //nueva contraseña
]


cambiar(a:number, b:number)
//b Solo puede recibir (0,1); 0 = usuario; 1=contraseña;
//a solo puede recibir (2,3) 2 = nuevo usuario 3 = nueva contraseña
//ejemplo cambiar(0, 2) usuario y nuevo usuario

  {
   if(this.cambio[0] == this.user[0] || this.cambio[1] == this.user[1])
   {
    this.user.splice(a, 1);
    this.user.splice(a, 0, this.cambio[b]);
    alert("cambio con exito");
   } 
   else{
    alert("Algo salio mal, intentalo de nuevo");
   }
  }

  usuario="";
  contrasena="";

administrador()
      {

        if(this.usuario[0]==this.user[0] && this.contrasena[0]==this.user[1])
        {
          alert("iniciado con exito");
          this.servicio.cambio(true);
        

        }
        else 
        {

          alert("usuario o contraseña invalido");
          this.servicio.cambio(false);
        }
      }

acceso_rapido()
      {
        this.servicio.cambio(true);  
  
      }


  constructor(public servicio:ServiciosService) {
    
  }
  ngOnInit(): void {

   
     

  }

}
