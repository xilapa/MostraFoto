import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageGuard } from './core/guards/login-page.guard';

import { NotfoundComponent } from './errors/notfound/notfound.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { MeuTesteComponent } from './tooltipCSS/tooltipCSS.component';

const routes: Routes = [
  { path: '', component: SignInComponent, canActivate: [LoginPageGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: 'user/:userName', component: PhotoListComponent, resolve: { photos: PhotoListResolver } },
  { path: 'p/add', component: PhotosFormComponent },
  { path: 'test', component: MeuTesteComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
