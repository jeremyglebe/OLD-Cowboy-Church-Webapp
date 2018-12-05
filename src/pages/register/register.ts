import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email: string = "";
  password: string = "";
  verifypw: string = "";

  constructor(public auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async doRegister() {

    if(this.pwsMatch()){

      try{
        await this.auth.register(this.email, this.password);
      }catch(e){
        console.log(e);
      }

    }else{
      console.log("PASSWORDS DO NOT MATCH!");
    }

  }

  pwsMatch(){
    return this.password == this.verifypw;
  }

}
