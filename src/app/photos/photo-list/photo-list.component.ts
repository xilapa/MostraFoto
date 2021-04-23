import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  
public title = 'MostraFoto';

public photos: IPhoto[] =[];

constructor(private photoService: PhotoService,
  private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {

  const userName:string = this.activatedRoute.snapshot.params.userName;

  this.photoService
    .listFromUser(userName)
    .subscribe( {
      next: photos => this.photos = photos,
      error: err => console.log(err)      
    });
  }
  
}
