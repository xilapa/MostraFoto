import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
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

  constructor(private activatedRoute: ActivatedRoute, private photoService : PhotoService, private router : Router, private alertService: AlertService, private userService: UserService) { }

  ngOnInit(): void {
    this.photoId = this.activatedRoute.snapshot.params['photoId'];
    this.photo$ = this.photoService.getById(this.photoId);
    this.photo$.subscribe(() => { }, err => this.router.navigate(['/not-found']));
  }

  removePhoto(): void {
    this.photoService.removePhoto(this.photoId)
      .subscribe(
        () => {
          this.router.navigate(['/user', this.userService.getUserName()]);
          this.alertService.success('Photo removed!');
        },
        err => {
          console.log(err);
          this.alertService.warning('Could not remove photo!');
        });
  }

  likePhoto(): void {
    this.photoService.likePhoto(this.photoId)
      .subscribe(liked => {
        if (liked)
          this.photo$ = this.photoService.getById(this.photoId);
        else
          this.alertService.info("Photo already liked!");
      },
        (err) => {
          console.log(err);
          this.alertService.danger("Error when liking photo")
      })
  }

}
