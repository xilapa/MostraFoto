import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert } from './Alert';
import { AlertService } from './alert.service';

@Component({
  selector: 'mf-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  public alertList: Alert[] = [];
  private subscriptions = new Subscription();
  @Input() timeout = 3000;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    let alertSubs = this.alertService.getAlert().subscribe(alert => {
      this.alertList.push(alert);
      setTimeout(() => this.alertList = this.alertList.filter(a => a != alert), this.timeout);
    }
    )
    this.subscriptions.add(alertSubs);
  }
  
}
