import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',redirectTo:"structure",pathMatch:'full'  },
  { path: 'structure', loadChildren: () => import('./structurel/structurel.module').then(m => m.StructurelModule) },
  { path: 'imc', loadChildren: () => import('./imc/imc.module').then(m => m.ImcModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
