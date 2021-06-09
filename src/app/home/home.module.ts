import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ SignInComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ]
})
export class HomeModule { }
