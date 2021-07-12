import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPhoto } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<IPhoto>;
  photoId: number;
  photoOwner: boolean;

  constructor(private activatedRoute: ActivatedRoute, private photoService : PhotoService, private router : Router) { }

  ngOnInit(): void {
    this.photoId = this.activatedRoute.snapshot.params['photoId'];
    this.photo$ = this.photoService.getById(this.photoId);
  }

  removePhoto(): void {
    this.photoService.removePhoto(this.photoId)
      .subscribe(() => this.router.navigate(['']));
  }

}
