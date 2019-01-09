import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = "";
  password: string = "";

  constructor(
    public auth: AuthProvider,
    public navCtrl: NavController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async doLogin() {
    try {
      await this.auth.login(this.email, this.password);
      this.navCtrl.pop();
    } catch (e) {
      console.log(e);
    }
  }

}
