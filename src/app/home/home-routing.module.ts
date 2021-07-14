import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageGuard } from '../core/guards/login-page.guard';


import { HomeComponent } from './home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginPageGuard],
        children:
            [
                { path: '', component: SignInComponent, data: { title: "Sign In"} },
                { path: 'signup', component: SignUpComponent, data: { title: "Sign Up"} }
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
