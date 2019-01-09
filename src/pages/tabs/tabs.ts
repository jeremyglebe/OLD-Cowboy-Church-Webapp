import { AboutPage } from './../about/about';
import { ContactPage } from './../contact/contact';
import { FindPage } from './../find/find';
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  welcomeTab = WelcomePage;
  aboutTab = AboutPage;
  findTab = FindPage;
  contactTab = ContactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
