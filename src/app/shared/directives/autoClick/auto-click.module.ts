import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoClickDirective } from './auto-click.directive';



@NgModule({
  declarations: [AutoClickDirective],
  imports: [
    CommonModule
  ],
  exports: [AutoClickDirective]
})
export class AutoClickModule { }
