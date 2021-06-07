import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './errors/notfound/notfound.component';
import { SignInComponent } from './home/sig-in/sign-in.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'user/:userName', component: PhotoListComponent, resolve: { photos: PhotoListResolver } },
  { path: 'p/add', component: PhotosFormComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
