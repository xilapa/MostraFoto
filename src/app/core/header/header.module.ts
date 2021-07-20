import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';



@NgModule({
  declarations: [ HeaderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
    MenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
