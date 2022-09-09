import { HttpClient } from "@angular/common/http";
import { Injectable, Type } from "@angular/core";
import { Observable } from "rxjs";
import { skill } from "./center-content-skill/center-content-skill.component";
import { education, experience,  project, user } from "./objects.models";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class DataService{

    private url:string="https://calm-shore-43654.herokuapp.com/"
    constructor(private httpClient:HttpClient){}

    //Servicios para el usuario, 
    userPost(user:user):Observable<user>{ return this.httpClient.post<user>(this.url,user);} 
    getUser():Observable<user>{ return this.httpClient.get<user>(this.url+"/1");}
    
    

    //Servicios para la experiencia
    getIdExperience(id:string):Observable<experience>{return this.httpClient.get<experience>(this.url+"/experience/"+id);}
    getAllExperience():Observable<experience[]>{ return this.httpClient.get<experience[]>(this.url+"/experience/");}
    createExperience(experience:experience):Observable<experience>{ return this.httpClient.post<experience>(this.url+"/experience",experience);}
    deleteExperience(id:string):Observable<experience>{ return this.httpClient.delete<experience>(this.url+"/experience/"+id);}

    //Servicios para la education 

    getIdEducation(id:string):Observable<education>{return this.httpClient.get<education>(this.url+"/education/"+id);}
    getAllEducation():Observable<education[]>{ return this.httpClient.get<education[]>(this.url+"/education");}
    createEducation(education:education):Observable<education>{ return this.httpClient.post<education>(this.url+"/education",education);}
    deleteEducation(id:string):Observable<education>{ return this.httpClient.delete<education>(this.url+"/education/"+id);}    


    //Servicios para los projectos
    getIdproject(id:string):Observable<project>{return this.httpClient.get<project>(this.url+"/project/"+id);}
    getAllproject():Observable<project[]>{ return this.httpClient.get<project[]>(this.url+"/project");}
    createProject(project:project):Observable<project>{ return this.httpClient.post<project>(this.url+"/project",project);}
    deleteproject(id:string):Observable<project>{ return this.httpClient.delete<project>(this.url+"/project/"+id);}

    //Servicios para skill
    getIdskill(id:string):Observable<skill>{return this.httpClient.get<skill>(this.url+"/skill/"+id);}
    getAllskill():Observable<skill[]>{ return this.httpClient.get<skill[]>(this.url+"/skill");}
    createSkill(skill:skill):Observable<skill>{ return this.httpClient.post<skill>(this.url+"/skill",skill);}
    deleteskill(id:string):Observable<skill>{ return this.httpClient.delete<skill>(this.url+"/skill/"+id);}


} 
