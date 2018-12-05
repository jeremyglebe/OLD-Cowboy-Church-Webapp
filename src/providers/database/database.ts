import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';



@Injectable()
export class DatabaseProvider {

  //The user directory
  directory: any[];
  //Download URLs for specific image files in storage. Keyed like so
  //{
  //  './myfile.jpg': 'https://www.whatever.thisdownload.net/myfile.jpg',
  //  './otherfile.jpg': 'https://www.whatever.thisdownload.net/otherfile.jpg'
  //}
  image_urls: any = {};

  constructor(public database: AngularFirestore, public storage: AngularFireStorage) {

    //Track any changes to the directory collection
    this.database.collection('Directory').valueChanges().subscribe((collection) => {
      //Store collection in the directory object
      this.directory = collection;
      //For each item in the directory
      this.directory.forEach((item) => {
        //Get the download url of the file listed as its picture
        this.storage.storage.ref(item.Picture).getDownloadURL().then((url) => {
          //Store that url in an object, keyed with the name of the file
          this.image_urls[item.Picture] = url;
        });
      })

    });

  }

}
