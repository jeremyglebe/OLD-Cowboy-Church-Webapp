import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = "";
  password: string = "";

  constructor(public auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async doLogin() {
    try{
      await this.auth.login(this.email, this.password);
    }catch(e){
      console.log(e);
    }
  }

}
