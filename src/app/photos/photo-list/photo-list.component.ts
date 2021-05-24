import { Component, OnDestroy, OnInit } from '@angular/core';
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
  public photos_filtradas: IPhoto[] = [];

  public filtro_busca: string ='';
  public hasMore: boolean = true;
  public userName: string = '';
  public actualPage: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }
  
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;

  }  
  

  

  onClick() : void{
    this.photoService.listFromUserPaginated(this.userName, ++this.actualPage)
      .subscribe(
        photos => {
          if (photos.length)
            this.photos = this.photos.concat(photos);
          else
            this.hasMore = false;
        }
      )
  }
}

