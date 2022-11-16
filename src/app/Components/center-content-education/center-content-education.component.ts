import { Component, Injectable, OnInit } from '@angular/core';
import { education } from 'src/app/Models/objects.models';
import { DataService } from 'src/app/Services/data.services';
import { ServiciosService } from 'src/app/Services/servicios.service';



@Component({
  selector: 'app-center-content-education',
  templateUrl: './center-content-education.component.html',
  styleUrls: ['./center-content-education.component.css']
})
@Injectable()
export class CenterContentEducationComponent implements OnInit 
{
  constructor(public servicio:ServiciosService, private dataService:DataService) { }

  educations:education[] = [];
  educationNew:education = new education();
  
  
  educationEditButton:boolean = false;
 

  educationVoid()
  {
    this.educationNew.id = null;
    this.educationNew.institution = "";
    this.educationNew.education = "";
    this.educationNew.degree = "";
    this.educationNew.time = "";
  
  }


  addEducation()
  { 

    if(this.educationNew.institution == "")      { alert("Ingrese Institucion Educativa"); }
    else if(this.educationNew.education == ""){ alert("Ingrese Nivel Education");}
    else {
            this.dataService.createEducation(this.educationNew).subscribe();
            alert("Creada nueva education de " + this.educationNew.institution);
            this.ngOnInit();
         }
  }
  

  editEducation(id:null)
    { 
      this.educationEditButton = true;
      const idString = String(id);
      alert("Edite La educación Abajo");
       this.dataService.getIdEducation(idString).subscribe( ex=> this.educationNew=ex );

    }

  saveChangeEducation()
  {
    this.dataService.createEducation(this.educationNew).subscribe();
    this.educationVoid();
    this.educationEditButton = false;
    alert("Educación Actualizada");
    this.ngOnInit();
    
  }

  cancelChangeEducation(){

    this.educationVoid();
    this.educationEditButton = false;
    alert("Cancelado");

  }


  deleteEducation(id:null)
    { 
      const idString = String(id);
      confirm("Seguro de eliminar ?");
      if(confirm()){this.dataService.deleteEducation(idString).subscribe();}
      alert("Eliminado");
      this.ngOnInit();

    }
   
 


  ngOnInit(): void {
   this.dataService.getAllEducation().subscribe(e => this.educations=e );
   
  }

}
