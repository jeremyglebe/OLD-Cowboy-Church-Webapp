
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AuthProvider {

  public user = null;

  constructor(
    public afAuth: AngularFireAuth,
    public af: AngularFirestore
  ) {
    console.log('Hello AuthProvider Provider');
    afAuth.user.subscribe(
      (userUpdate) => {
        this.user = userUpdate;
        console.log(this.user);
      }
    )
  }

  async register(email: string, password: string, data?: any) {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      if (data) {
        await this.updateUserData(data);
      } else {
        await this.updateUserData({});
      }
    } catch (e) {
      throw e;
    }
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      throw e;
    }
  }

  async logout() {
    try {
      await this.afAuth.auth.signOut();
      this.user = null;
      console.log(this.user);
    } catch (e) {
      throw e;
    }
  }

  async updateUserData(data: any) {
    try {
      var userObj = data;
      var user = this.afAuth.auth.currentUser;
      await user.updateProfile({
        displayName: data.displayName || "",
        photoURL: data.photoURL || ""
      });
      userObj['email'] = user.email;
      userObj['uid'] = user.uid;
      await this.af.collection('apps').doc('ccip').collection('users')
        .doc(userObj['uid']).set(userObj);
    } catch (e) {
      throw e;
    }
  }

}
