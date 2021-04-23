import { Component, Input } from "@angular/core";

@Component({
    selector:'mf-photo',
    templateUrl: './photo.component.html'
})

export class PhotoComponent {
    @Input() public description: string = 'desc';
    @Input() public url: string = 'src';
}