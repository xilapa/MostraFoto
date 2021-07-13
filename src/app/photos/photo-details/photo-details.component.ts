import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { IPhoto } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<IPhoto>;
  photoId: number;
  photoOwner: boolean;

  constructor(private activatedRoute: ActivatedRoute, private photoService : PhotoService, private router : Router, private alertService: AlertService) { }

  ngOnInit(): void {
    this.photoId = this.activatedRoute.snapshot.params['photoId'];
    this.photo$ = this.photoService.getById(this.photoId);
  }

  removePhoto(): void {
    this.photoService.removePhoto(this.photoId)
      .subscribe(
        () => {
          this.alertService.success('Photo removed!');
          this.router.navigate(['']);
        },
        err => {
          console.log(err);
          this.alertService.warning('Could not remove photo!');
        });
  }

}
