import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'mf-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  public subjectFiltro: Subject<string> = new Subject<string>();
  @Output() filtro_busca_alterado : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.subjectFiltro.pipe(debounceTime(300)).subscribe(filtro => this.filtro_busca_alterado.emit(filtro));
  }

  ngOnDestroy(): void {
    this.subjectFiltro.unsubscribe();
  }

  onKeyUp(event : any) : string {
    return event.target.value;
  }
}
