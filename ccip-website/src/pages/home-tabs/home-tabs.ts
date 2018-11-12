import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the HomeTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html'
})
export class HomeTabsPage {

  tabWelcome = WelcomePage;
  tab2 = WelcomePage;
  tab3 = WelcomePage;

  constructor(public navCtrl: NavController) {}

}
