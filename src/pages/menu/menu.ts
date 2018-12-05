import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Import pages
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ManagePage } from '../manage/manage';

//Import global variables
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = TabsPage;
  g: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public global: GlobalProvider)
  {
    this.g = global;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  Clicked_Login() {
    this.navCtrl.push(LoginPage);
  }

  Clicked_Register() {
    this.navCtrl.push(RegisterPage);
  }

  Clicked_Manage() {
    this.navCtrl.push(ManagePage);
  }

}
