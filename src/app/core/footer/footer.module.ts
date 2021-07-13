import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'src/app/shared/alert/alert.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
