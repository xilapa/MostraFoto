import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPhoto } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<IPhoto>;
  photoId: number;

  constructor(private activatedRoute: ActivatedRoute, private photoService : PhotoService) { }

  ngOnInit(): void {
    this.photoId = this.activatedRoute.snapshot.params['photoId'];
    this.photo$ = this.photoService.getById(this.photoId);
  }

}
