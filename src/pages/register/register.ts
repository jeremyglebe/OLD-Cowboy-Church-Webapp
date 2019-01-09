import { AngularFireStorage } from 'angularfire2/storage';
import { DatabaseProvider } from './../../providers/database/database';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { finalize } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email: string = "";
  password: string = "";
  verifypw: string = "";
  name: string = "";
  phone: string = "";
  url: string;

  constructor(
    public auth: AuthProvider,
    public storage: AngularFireStorage,
    public navCtrl: NavController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async doRegister() {

    if (this.pwsMatch()) {

      try {
        await this.auth.register(this.email, this.password, {
          public: false,
          displayName: this.name,
          phone: this.phone,
          photoURL: this.url
        });
        this.navCtrl.pop();
      } catch (e) {
        console.log(e);
      }

    } else {
      console.log("PASSWORDS DO NOT MATCH!");
    }

  }

  pwsMatch() {
    return this.password == this.verifypw;
  }

  public task;
  public percentage;
  public snapshot;
  public downloadURL;
  profilePicUpload(event: FileList) {
    // The File object
    const file = event.item(0)
    // Type of file
    if (file.type.split('/')[0] !== "image"){
      console.error('unsupported file type :(');
      return;
    }
    // The storage path
    var path = `ccip/users/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'HRCC WebApp' };
    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    //Snapshot changes
    this.snapshot = this.task.snapshotChanges()

    // The file's download URL
    this.snapshot.pipe(
      finalize(() => {
        this.downloadURL = this.storage.ref(path).getDownloadURL()
        this.downloadURL.toPromise().then(
          (url) => {
            this.url = url;
          }
        )
      }
      )).subscribe();
  }


}
