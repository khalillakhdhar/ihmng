import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImcRoutingModule } from './imc-routing.module';
import { ImcComponent } from './imc.component';
import { IndiceComponent } from './indice/indice.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";


@NgModule({
  declarations: [
    ImcComponent,
    IndiceComponent
  ],
  imports: [
    CommonModule,
    ImcRoutingModule,
    FormsModule,
    FooterComponent
]
})
export class ImcModule { }
