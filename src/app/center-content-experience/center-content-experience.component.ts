import { Component, Injectable, OnInit } from '@angular/core';
import { DataService } from '../data.services';
import { experience } from '../objects.models';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-center-content-experience',
  templateUrl: './center-content-experience.component.html',
  styleUrls: ['./center-content-experience.component.css']
})


@Injectable()
export class CenterContentExperienceComponent implements OnInit 
{
  constructor(public servicio:ServiciosService, private dataService:DataService) { }

  experiences:experience[] = [];
  experienceNew:experience = new experience();
  
  
  experienceEditButton:boolean = false;
 

  experienceVoid()
  {
    this.experienceNew.id = null;
    this.experienceNew.company = "";
    this.experienceNew.manager = "";
    this.experienceNew.position = "";
    this.experienceNew.time = "";
    this.experienceNew.web = "";
  }


  addExperience()
  { 

    if(this.experienceNew.company == "")      { alert("Ingrese Institucion"); }
    else if(this.experienceNew.position == ""){ alert("Ingrese Cargo");}
    else {
            this.dataService.createExperience(this.experienceNew).subscribe();
            alert("Creada nueva experiencia de " + this.experienceNew.company);
            this.ngOnInit();
         }
  }

  editExperience(id:null)
    { 
      this.experienceEditButton = true;
      const idString = String(id);
      alert("Edite La experiencia");
      this.dataService.getIdExperience(idString).subscribe( ex=> this.experienceNew=ex );

    }

  saveChangeExperience()
  {
    this.dataService.createExperience(this.experienceNew).subscribe();
    this.experienceVoid();
    this.experienceEditButton = false;
    alert("Experiencia Actualizada");
    this.ngOnInit();
      
  }  

  cancelChangeExperience(){

    this.experienceVoid();
    this.experienceEditButton = false;
    alert("Cancelado");

  }


  deleteExperience(id:null)
    { 
      const idString = String(id);
      confirm("Seguro de eliminar ");
      if(confirm()){this.dataService.deleteExperience(idString).subscribe();}
      alert("Eliminado");
      this.ngOnInit();

    }
   
 


  ngOnInit(): void {
   this.dataService.getAllExperience().subscribe(e => this.experiences=e );
   
  }

}
