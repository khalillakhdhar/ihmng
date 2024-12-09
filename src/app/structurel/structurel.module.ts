import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructurelRoutingModule } from './structurel-routing.module';
import { StructurelComponent } from './structurel.component';
import { IfcComponent } from './ifc/ifc.component';
import { ForcComponent } from './forc/forc.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from "../footer/footer.component";
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    StructurelComponent,
    IfcComponent,
    ForcComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    StructurelRoutingModule,
    FooterComponent,
    
]
})
export class StructurelModule { }
