import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotosFormComponent } from './photos-form.component';

@NgModule({
    declarations: [ PhotosFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VmessageModule,
        RouterModule
    ]
})
export class PhotosFormModule{}