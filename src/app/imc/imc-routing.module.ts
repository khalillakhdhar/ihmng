import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './imc.component';
import { IndiceComponent } from './indice/indice.component';

const routes: Routes = [{ path: '', component: ImcComponent,
  children:[
    {
      path:'',component:IndiceComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImcRoutingModule { }
