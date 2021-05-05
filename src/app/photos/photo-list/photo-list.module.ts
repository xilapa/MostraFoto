import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoModule } from '../photo/photo.module';


@NgModule({
    declarations: [
        FilterByDescriptionPipe,
        PhotoListComponent,
        LoadButtonComponent,
        PhotosComponent
    ],
    imports: [
        CommonModule,
        PhotoModule
    ]
})

export class PhotoListModule{}