import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        FilterByDescriptionPipe,
        PhotoListComponent,
        LoadButtonComponent,
        PhotosComponent,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        RouterModule
    ]
})

export class PhotoListModule{}