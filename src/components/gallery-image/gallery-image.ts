import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';

@Component({
  selector: 'gallery-image',
  inputs: ['image_info'],
  templateUrl: 'gallery-image.html'
})
export class GalleryImageComponent {

  image_info: any;

  constructor(
    public db: DatabaseProvider
  ) {
    console.log('Hello GalleryImageComponent Component');
  }

  async update_info(){
    await this.db.updateImageInfoByPath(this.image_info['path'], this.image_info);
    console.log("Toggle info was changed.");
  }

}
