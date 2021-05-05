import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotosFormModule } from './photos-form/photos-form.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoListModule,
        PhotosFormModule
    ]
})

export class PhotosModules{

}