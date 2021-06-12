import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './meuTeste.component.html',
  styleUrls: ['./meuTeste.component.css']

})
export class MeuTesteComponent implements OnInit {

  public arrayNumeros: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 100; index++) {
      this.arrayNumeros.push("Erro ".repeat(index));
      
    }
    console.log(this.arrayNumeros)
  }



  

}
