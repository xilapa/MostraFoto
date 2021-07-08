import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPhoto } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<IPhoto>;


  constructor(private activatedRoute: ActivatedRoute, private photoService : PhotoService) { }

  ngOnInit(): void {
    var photoId = this.activatedRoute.snapshot.params['photoId'];
    this.photo$ = this.photoService.getById(photoId);
  }

}
