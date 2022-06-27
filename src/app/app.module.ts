import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







import { AppComponent } from './app.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { BroswerComponent } from './broswer/broswer.component';
import { UpContentComponent } from './up-content/up-content.component';
import { ServiciosService } from './servicios.service';
import { CenterContentAboutMeComponent } from './center-content-about-me/center-content-about-me.component';
import { CenterContentExperienceComponent } from './center-content-experience/center-content-experience.component';
import { CenterContentEducationComponent } from './center-content-education/center-content-education.component';
import { CenterContentProjectComponent } from './center-content-project/center-content-project.component';
import { CenterContentAdminComponent } from './center-content-admin/center-content-admin.component';




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
    CenterContentAdminComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,   
    ReactiveFormsModule,

  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
