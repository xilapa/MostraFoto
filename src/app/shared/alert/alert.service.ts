import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertType, Alert } from './Alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  success(message: string) {
    this.alert(AlertType.SUCCESS, message, 'alert alert-success');
  }

  warning(message: string) {
    this.alert(AlertType.WARNING, message, 'alert alert-warning');
  }

  danger(message: string) {
    this.alert(AlertType.DANGER, message, 'alert alert-danger');
  }

  info(message: string) {
    this.alert(AlertType.INFO, message, 'alert alert-info');
  }
  getAlert(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }
  private alertSubject = new Subject<Alert>();

  private alert(altertType: AlertType, message: string, alertClass: string): void {
    this.alertSubject.next(new Alert(altertType, message, alertClass));
  }

}
