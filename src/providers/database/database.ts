import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class DatabaseProvider {

  observable_appDoc: Observable<any>;
  observable_users: Observable<any>;
  observable_directory: Observable<any>;
  observable_gallery: Observable<any>;
  observable_recordings: Observable<any>;
  observable_beliefs: Observable<any>; 
  appDoc: any;
  users: any;
  directory: any;
  gallery: any;
  gallery_featured: any;
  recordings: any;
  beliefs: any;

  constructor(
    private afs: AngularFirestore
  ) {
    console.log('Hello DatabaseProvider Provider');
    //Reference to the apps main document in firestore
    this.observable_appDoc = this.afs.doc('apps/ccip').valueChanges();
    this.observable_appDoc.subscribe((changes) => {
      this.appDoc = changes;
      console.log("Changes to app document: ", changes);
    });
    //Reference to users collection
    this.observable_users = this.afs.collection('apps/ccip/users').valueChanges();
    this.observable_users.subscribe((changes) => {
      this.users = changes;
      console.log("Changes to users: ", changes)
    });
    //Reference to directory collection
    this.observable_directory = this.afs.collection('apps/ccip/directory').valueChanges();
    this.observable_directory.subscribe((changes) => {
      this.directory = changes;
      console.log("Changes to users: ", changes)
    });
    //Reference to beliefs collection
    this.observable_beliefs = this.afs.collection('apps/ccip/beliefs', ref => ref.orderBy('order')).valueChanges();
    this.observable_beliefs.subscribe((changes) => {
      this.beliefs = changes;
      console.log("Changes to beliefs: ", changes)
    });
    //Reference to gallery collection
    this.observable_gallery = this.afs.collection('apps/ccip/gallery').valueChanges();
    this.observable_gallery.subscribe((changes) => {
      this.gallery = changes;
      console.log("Changes to gallery: ", changes)
      var fpics = [];
      for (let image of this.gallery) {
        if (image.feature) {
          fpics.push(image);
        }
      }
      this.gallery_featured = fpics;
      console.log("Changes to featured gallery: ", fpics)
    });
    //Reference to recordings collection
    this.observable_recordings = this.afs.collection('apps/ccip/recordings').valueChanges();
    this.observable_recordings.subscribe((changes) => {
      this.recordings = changes;
      console.log("Changes to recordings: ", changes)
    });
  }

  async updateImageInfo(docID: string, info: any) {
    try {
      await this.afs.collection('apps').doc('ccip').collection('gallery').doc(docID).update(info);
    } catch (e) {
      console.log(e);
    }
  }

  async updateImageInfoByPath(path: string, info: any) {
    try {
      var docID = await this.getImageIdByPath(path);
      await this.afs.collection('apps').doc('ccip').collection('gallery').doc(docID).update(info);
    } catch (e) {
      console.log(e);
    }
  }

  async getImageIdByPath(path: string): Promise<string> {
    try {
      var id;
      var gal = await this.afs.collection('apps').doc('ccip').collection('gallery').get().toPromise();
      await gal.forEach((docsnap) => {
        var snappath = docsnap.data()['path'];
        if (snappath == path) {
          id = docsnap.id;
        }
      })
      return id;
    } catch (e) {
      console.log(e);
      return 'ERROR: NO ID PROVIDED';
    }
  }

  async addToDirectory(uid) {
    var user = await this.afs.collection('apps').doc('ccip')
      .collection('users').doc(uid).get().toPromise();
    console.log(user.data());
    var dirEntry = {
      photoURL: user.data()['photoURL'],
      displayName: user.data()['displayName'],
      phone: user.data()['phone'],
      email: user.data()['email']
    }
    this.afs.collection('apps').doc('ccip')
      .collection('directory').doc(uid).set(dirEntry);
  }

}
