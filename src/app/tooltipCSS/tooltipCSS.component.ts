import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './tooltipCSS.component.html',
  styleUrls: ['./tooltipCSS.component.css']

})
export class MeuTesteComponent implements OnInit {

  public arrayNumeros: string[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 50; index++) {
      this.arrayNumeros.push("Erro ".repeat(index).trim());
      
    }
    console.log(this.arrayNumeros)
  }

}
