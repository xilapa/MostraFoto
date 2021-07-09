import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



import { IPhoto } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';


@Component({
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  
  public title = 'MostraFoto';
  public photos: IPhoto[] =[];
  public photos_filtradas: IPhoto[] = [];

  public filtro_busca: string ='';
  public hasMore: boolean = true;
  public userName: string = '';
  public actualPage: number = 1;

  public subscriptions = new Subscription();


  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }
  
  ngOnInit(): void {
    let routeSubs = this.activatedRoute.paramMap.subscribe(params => {
      this.userName = params.get('userName');
      // toda vez que a rota mudar ele vai no resolver buscar os dados
      this.photos = this.activatedRoute.snapshot.data.photos;
    })
    this.subscriptions.add(routeSubs);
  }  
  
  ngOnDestroy(): void {
    this.subscriptions && this.subscriptions.unsubscribe()
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

