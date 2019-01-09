import { DatabaseProvider } from './../../providers/database/database';
import { UploadPage } from './../upload/upload';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recordings',
  templateUrl: 'recordings.html',
})
export class RecordingsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db: DatabaseProvider 
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordingsPage');
  }

  uploadClicked(){
    this.navCtrl.push(UploadPage);
  }

}
