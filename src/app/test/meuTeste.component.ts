import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';


@Component({
  templateUrl: './meuTeste.component.html',
  styleUrls: ['./meuTeste.component.css']

})
export class MeuTesteComponent implements OnInit,AfterViewInit {

  public arrayNumeros: string[] = [];
  public popper?: any;
  @ViewChild('texto') texto: ElementRef<HTMLElement>;
  @ViewChild('tooltip') tooltip: ElementRef<HTMLElement>; 
  constructor() { }
  ngAfterViewInit(): void {
    this.popper = createPopper(this.texto.nativeElement, this.tooltip.nativeElement , { placement: 'top'})
  }

  ngOnInit(): void {
    for (let index = 0; index < 100; index++) {
      this.arrayNumeros.push("Erro ");
      
    }
    console.log(this.arrayNumeros)
  }



  

}
