import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert } from './Alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  success(message: string) {
    this.alert('alert alert-success', message);
  }

  warning(message: string) {
    this.alert('alert alert-warning', message);
  }

  danger(message: string) {
    this.alert('alert alert-danger', message);
  }

  info(message: string) {
    this.alert('alert alert-info', message);
  }
  getAlert(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }
  private alertSubject = new Subject<Alert>();

  private alert(alertClass: string, message: string): void {
    this.alertSubject.next(new Alert(alertClass, message));
  }

}
