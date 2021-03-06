import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SignUpService } from './sign-up/sign-up.service';



@NgModule({
  declarations: [ SignInComponent, SignUpComponent, HomeComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    HomeRoutingModule
  ],
  providers: [SignUpService]
})
export class HomeModule { }
