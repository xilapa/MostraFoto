import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [ SignInComponent, SignUpComponent, HomeComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ]
})
export class HomeModule { }
