import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BroswerComponent } from "./Components/broswer/broswer.component";
import { CenterContentAboutMeComponent } from "./Components/center-content-about-me/center-content-about-me.component";
import { CenterContentAdminComponent } from "./Components/center-content-admin/center-content-admin.component";
import { CenterContentEducationComponent } from "./Components/center-content-education/center-content-education.component";
import { CenterContentExperienceComponent } from "./Components/center-content-experience/center-content-experience.component";
import { CenterContentProjectComponent } from "./Components/center-content-project/center-content-project.component";
import { CenterContentSkillComponent } from "./Components/center-content-skill/center-content-skill.component";
import { CenterContentComponent } from "./Components/center-content/center-content.component";
import { UpContentComponent } from "./Components/up-content/up-content.component";
import { DataService } from "./Services/data.services";
import { ServiciosService } from "src/app/Services/servicios.service";



@NgModule({
  declarations: [
    AppComponent,
    CenterContentComponent,
    BroswerComponent,
    UpContentComponent,
    CenterContentAboutMeComponent,
    CenterContentExperienceComponent,
    CenterContentEducationComponent,
    CenterContentProjectComponent,
    CenterContentAdminComponent,
    CenterContentSkillComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,   
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [ServiciosService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
