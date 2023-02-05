import { Pipe, PipeTransform } from '@angular/core';
import { Painting } from '../interfaces/painting.interface';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(painting: Painting): string {
    if (!painting.id && !painting.url_img) {
      return 'assets/no-image.jpg';
    } else if (painting.url_img) {
      return painting.url_img;
    } else {
      return `assets/paintings/${painting.id}.jpg`;
    }
  }
}
