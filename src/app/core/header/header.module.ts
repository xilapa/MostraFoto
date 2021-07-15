import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LoadingModule } from 'src/app/shared/loading/loading.module';



@NgModule({
  declarations: [ HeaderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
