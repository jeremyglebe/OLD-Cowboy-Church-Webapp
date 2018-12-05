import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public dbp: DatabaseProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
