import { Component } from '@angular/core';

@Component({
  selector: 'mf-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  visible = false;

  toggle(): void {
    this.visible = !this.visible;
  }

}
