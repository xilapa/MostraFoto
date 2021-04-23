import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';



@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotosFormComponent,
        PhotosComponent
    ], 
    imports: [
        HttpClientModule,
        CommonModule
    ]
})

export class PhotosModules{

}