import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Firestore database
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  directory: any[];
  image_urls: any = {};

  constructor(public database: AngularFirestore, public storage: AngularFireStorage) {

    this.database.collection('Directory').valueChanges().subscribe((changes) => {
      this.directory = changes;

      this.directory.forEach((item) => {
        this.storage.storage.ref(item.Picture).getDownloadURL().then((url) => {
          this.image_urls[item.Picture] = url;
        });
      })

      console.log(this.image_urls);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
