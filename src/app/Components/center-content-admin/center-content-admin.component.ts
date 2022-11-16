import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Models/objects.models';
import { DataService } from 'src/app/Services/data.services';
import { ServiciosService } from 'src/app/Services/servicios.service';



@Component({
  selector: 'app-center-content-admin',
  templateUrl: './center-content-admin.component.html',
  styleUrls: ['./center-content-admin.component.css']
})
export class CenterContentAdminComponent implements OnInit 
{

  constructor(public servicio:ServiciosService, private service:DataService) {}

  userAdmin:user;
  inputMail:string = "";
  inputPassword:number;
  inputNewPassword:number;


  fastAccess(){ this.servicio.cambio(true);   }

  sesionInit()
  {
    if( this.inputMail == this.userAdmin.mail && this.inputPassword == this.userAdmin.password )
    { this.inputPassword; this.servicio.cambio(true); alert("Modo Administrador Activado"); }
    else{ alert("campos incorrectos"); }

  }
  
      
  ngOnInit(): void { this.service.getUser().subscribe( ua => this.userAdmin = ua) }
  

}
