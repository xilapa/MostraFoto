import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { IPhoto } from '../photo/photo';


@Component({
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  
  public title = 'MostraFoto';
  public photos: IPhoto[] =[];
  public photos_filtradas: IPhoto[] = [];
  public filtro_busca: string = "";
  public subjectFiltro: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.subjectFiltro.pipe(debounceTime(300)).subscribe(filtro => this.filtro_busca = filtro);
  }  
  
  ngOnDestroy(): void {
    this.subjectFiltro.unsubscribe();
  }

  onKeyUp(event : any) : string {
  return event.target.value;
  }
}

