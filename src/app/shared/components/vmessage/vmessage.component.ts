import { Component, Input } from '@angular/core';

@Component({
  selector: 'mf-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.css']
})
export class VMessageComponent {

  @Input() public message: string;

}
