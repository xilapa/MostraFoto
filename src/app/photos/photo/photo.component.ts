import { Component, Input } from "@angular/core";

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
    selector: 'mf-photo',
    templateUrl: './photo.component.html'
})

export class PhotoComponent {
    private _url: string;
    @Input() public description: string = 'desc';
    @Input() set url(url: string) {
        this._url = url.startsWith('data') ? this._url = url : `${CLOUD}${url}`
    }

    get url() : string{
        return this._url;
    }
}