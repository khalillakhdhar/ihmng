import { Component } from '@angular/core';

@Component({
  selector: 'app-ifc',
  templateUrl: './ifc.component.html',
  styleUrl: './ifc.component.css'
})
export class IfcComponent {
  clicked:boolean=false;
  message:string="welcome to the app";
  pushed()
  {
    this.clicked=!this.clicked;

  }

}
