import { UsersPage } from './../users/users';
import { AuthProvider } from './../../providers/auth/auth';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GalleryPage } from '../gallery/gallery';
import { RecordingsPage } from './../recordings/recordings';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = TabsPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  registerClicked() {
    this.navCtrl.push(RegisterPage);
  }

  loginClicked() {
    this.navCtrl.push(LoginPage);
  }

  logoutClicked() {
    this.auth.logout();
  }

  galleryClicked() {
    this.navCtrl.push(GalleryPage);
  }

  recordingsClicked() {
    this.navCtrl.push(RecordingsPage);
  }

  usersClicked() {
    this.navCtrl.push(UsersPage);
  }

}
