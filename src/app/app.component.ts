import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) { }
  ngOnInit(): void {
    this.router.events
      // só pra pegar o evento de fim da navegação, não carrega dados
      .pipe(filter(event => event instanceof NavigationEnd))
      // trocando para pegar a rota ativa
      .pipe(map(() => this.activatedRoute))
      .pipe(tap( rota => console.log(rota)))
      // fazendo um while para identificar qual rota esta ativa no momento
      // pois o AppComponent não esta atraledo a uma rota
      // então no activatedRoute é preciso navegar até a rotaAtual, que não tem filhas
      // se houver um first child, a rota ativa vai ser substituida pelo primeiro filho
      // quando não houver mais filhos ela retorna null
      .pipe(map(rotaAtiva => {
        while (rotaAtiva.firstChild) rotaAtiva = rotaAtiva.firstChild;
        return rotaAtiva;
      }))
      // ActivatedRoute.data é um behavior subject
      // switchMap para trocar pra ele
      // detalhe que ele vem do observable anterior
      .pipe(switchMap((ultimafilha) => ultimafilha.data))
      // usando o valor de data no titleService
      .subscribe((data) => this.titleService.setTitle(data.title));
  }
}
