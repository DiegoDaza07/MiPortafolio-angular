import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







import { AppComponent } from './app.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { BroswerComponent } from './broswer/broswer.component';
import { UpContentComponent } from './up-content/up-content.component';




@NgModule({
  declarations: [
    AppComponent,
    CenterContentComponent,
    BroswerComponent,
    UpContentComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,   
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
