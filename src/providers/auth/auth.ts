import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public angFireAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  async register(email: string, password: string){
    try{
      await this.angFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }catch(e){
      throw e;
    }
  }

  async login(email: string, password: string){
    try{
      await this.angFireAuth.auth.signInWithEmailAndPassword(email, password);
    }catch(e){
      throw e;
    }
  }

}
