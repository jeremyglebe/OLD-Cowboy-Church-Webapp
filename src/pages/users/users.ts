import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db: DatabaseProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  addClicked(uid){
    console.log(uid);
    this.db.addToDirectory(uid);
  }

}
