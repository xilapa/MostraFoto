import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { DarkenOnHoverModule } from '../../directives/darken-on-hover.module';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    DarkenOnHoverModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
