import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructurelComponent } from './structurel.component';
import { IfcComponent } from './ifc/ifc.component';
import { ForcComponent } from './forc/forc.component';

const routes: Routes = [{ path: '', component: StructurelComponent,
  children:[
    {path:'',component:IfcComponent},
    {path:'for',component:ForcComponent}
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructurelRoutingModule { }
