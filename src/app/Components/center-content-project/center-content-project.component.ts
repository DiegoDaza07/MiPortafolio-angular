import { Component, Injectable, OnInit } from '@angular/core';
import { project } from 'src/app/Models/objects.models';
import { DataService } from 'src/app/Services/data.services';
import { ServiciosService } from 'src/app/Services/servicios.service';



@Component({
  selector: 'app-center-content-project',
  templateUrl: './center-content-project.component.html',
  styleUrls: ['./center-content-project.component.css']
})

@Injectable()
export class CenterContentProjectComponent implements OnInit 
{
  constructor(public servicio:ServiciosService, private dataService:DataService) { }

  projects:project[] = [];
  projectNew:project = new project();
  
  
  projectEditButton:boolean = false;
 

  projectVoid()
  {
    this.projectNew.id = null;
    this.projectNew.name = "";
    this.projectNew.about = "";
    this.projectNew.link = "";

  }


  addProject()
  { 

    if(this.projectNew.name == "")      { alert("Ingrese nombre del proyecto"); }
    else if(this.projectNew.about == ""){ alert("Ingrese Sobre que trata el proyecto");}
    else {
            this.dataService.createProject(this.projectNew).subscribe();
            alert("Creado nuevo proyecto con el nombre " + this.projectNew.name);
            this.ngOnInit();
         }
  }

  editProject(id:null)
    { 
      this.projectEditButton = true;
      const idString = String(id);
      alert("Edite El projecto");
      this.dataService.getIdproject(idString).subscribe( pj=> this.projectNew=pj );

    }

  saveChangeProject()
  {
    this.dataService.createProject(this.projectNew).subscribe();
    this.projectVoid();
    this.projectEditButton = false;
    alert("Proyecto Actualizado");
    this.ngOnInit();
      
  }  

  cancelChangeProject(){

    this.projectVoid();
    this.projectEditButton = false;
    alert("Cancelado");

  }


  deleteProject(id:null)
    { 
      const idString = String(id);
      confirm("Seguro de eliminar ");
      if(confirm()){this.dataService.deleteproject(idString).subscribe();}
      alert("eliminado");
      this.ngOnInit();

    }
   
 


  ngOnInit(): void {
   this.dataService.getAllproject().subscribe(p => this.projects=p );
   
  }

}
