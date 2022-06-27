import { variable } from '@angular/compiler/src/output/output_ast';
import { Component,  } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'poject-angular';
}

const estado = false;

localStorage.setItem("registrado",JSON.stringify(estado));

