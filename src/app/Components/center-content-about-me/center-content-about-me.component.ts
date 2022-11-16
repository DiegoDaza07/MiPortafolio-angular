import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Models/objects.models';
import { DataService } from 'src/app/Services/data.services';
import { ServiciosService } from 'src/app/Services/servicios.service';



@Component({
  selector: 'app-center-content-about-me',
  templateUrl: './center-content-about-me.component.html',
  styleUrls: ['./center-content-about-me.component.css']
})

export class CenterContentAboutMeComponent implements OnInit {


   constructor(public servicio:ServiciosService, private dataService:DataService) { }
  
  userData:user;
 
  
  saveChangeUser()
  {
  
    this.dataService.userPost(this.userData).subscribe();
    alert("Experiencia Actualizada");
    this.ngOnInit();

  }

  cancelChangeUser()
  {
    alert("CANCELADO");
    this.ngOnInit();


  }


  ngOnInit(): void {
    this.dataService.getUser().subscribe( u=>this.userData=u )
    
   }
 

}
