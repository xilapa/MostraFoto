import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'mf-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  public subjectFiltro: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();
  @Output() filtro_busca_alterado : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.subjectFiltro.pipe(debounceTime(300))
    .subscribe(eventoInput => this.filtro_busca_alterado.emit((eventoInput.target as HTMLInputElement).value));
  }

  ngOnDestroy(): void {
    this.subjectFiltro.unsubscribe();
  }
}
