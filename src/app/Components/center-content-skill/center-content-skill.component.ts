import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.services';
import { ServiciosService } from 'src/app/Services/servicios.service';


@Component({
  selector: 'app-center-content-skill',
  templateUrl: './center-content-skill.component.html',
  styleUrls: ['./center-content-skill.component.css']
})



export class CenterContentSkillComponent implements OnInit {

  constructor( public servicio:ServiciosService, private dataService:DataService) { }



numberStar = []; 
  
 skillNew:skill=new skill();

 skills:skill[] =  [];

 addSkill()
 {
  

    if(this.skillNew.name == "")      { alert("Ingrese nombre"); }
    else if(this.skillNew.img == ""){ alert("Ingrese Link de la imagen");}
    else {
            this.dataService.createSkill(this.skillNew).subscribe();
            alert("Creado");
            this.ngOnInit();
         };
    this.ngOnInit();
  
 };

 deleteSkill(id:null)
 {
  const idString = String(id);
  confirm("Seguro de eliminar ");
  if(confirm()){this.dataService.deleteskill(idString).subscribe();}
  alert("eliminado");
  this.ngOnInit();

 };

 numStarts(n: number): Array<number> { return Array(n);};
 numNotStarts(s:number):Array<number>{ const a = 5 - s; return Array(a);};

ngOnInit(): void 
{
  this.dataService.getAllskill().subscribe(s => this.skills=s );



};

}
export class skill {

  id:null;
  img:string;
  name:string;
  value:number;
}