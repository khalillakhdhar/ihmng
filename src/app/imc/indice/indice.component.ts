import { Component } from '@angular/core';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrl: './indice.component.css'
})
export class IndiceComponent {
  taille!:number;
  poid!:number;
  imc:number=0;
  remarque:string="";

  calcule()
  {
    this.imc=Math.round(this.poid/this.taille**2);

  }

remarques()
{
  this.calcule();
  if(this.imc<20)
    this.remarque="maigre";
  else if(this.imc<=25)
    this.remarque="idéale";
  else
  this.remarque="surpoid";

}
}
