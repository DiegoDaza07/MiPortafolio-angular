import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.services';
import { user } from '../objects.models';
import { ServiciosService } from '../servicios.service';

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
