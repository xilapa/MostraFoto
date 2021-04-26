import { Pipe, PipeTransform } from '@angular/core';

import { IPhoto } from '../photo/photo';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: IPhoto[], filtro: string): IPhoto[] {
    filtro = filtro.trim().toLowerCase();
    return photos.filter(photo => photo.description.toLowerCase().includes(filtro));
  }

}
