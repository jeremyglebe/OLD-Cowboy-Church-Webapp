import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { AboutPage } from '../about/about';
import { LocatePage } from '../locate/locate';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  welcomeTab = WelcomePage;
  aboutTab = AboutPage;
  findTab = LocatePage;
  contactTab = ContactPage;

  constructor(public navCtrl: NavController) {}

}
