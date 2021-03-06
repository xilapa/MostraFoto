import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



import { NotfoundComponent } from './errors/notfound/notfound.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { MeuTesteComponent } from './tooltipCSS/tooltipCSS.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'user/:userName', component: PhotoListComponent, resolve: { photos: PhotoListResolver }, data: { title: "Timeline"} },
  { path: 'p/add', component: PhotosFormComponent, canActivate: [AuthGuard], data: { title: "Photo Upload"} },
  { path: 'p/:photoId', component: PhotoDetailsComponent, data: { title: "Photo Details"}},
  { path: 'test', component: MeuTesteComponent , data: { title: "Test Component"}},
  { path: 'not-found', component: NotfoundComponent, data: { title: "Not Found"}},
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,  preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
