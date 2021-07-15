import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { LoadingType } from './loading-type.enum';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new Subject<LoadingType>();
  constructor() { }

  getLoading() : Observable<LoadingType> {
    return this.loadingSubject.asObservable().pipe(startWith(LoadingType.STOPPED));
  }

  start() : void {
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stop(): void {
    this.loadingSubject.next(LoadingType.STOPPED);
  }

}
