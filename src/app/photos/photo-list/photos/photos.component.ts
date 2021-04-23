import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPhoto } from '../../photo/photo';

@Component({
  selector: 'mf-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() public photos: IPhoto[] = [];

  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes : SimpleChanges): void {
    if(changes.photos) this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: IPhoto[]): any[] {
    const row = [];

    for(let i = 0; i < photos.length; i+=3)
    {
      row.push(photos.slice(i, i+3));
    }

    return row;
  }

}
