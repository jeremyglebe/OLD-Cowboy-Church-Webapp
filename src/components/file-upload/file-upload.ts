/* Inspiration and assitance from tutorial at
 * https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/
 */
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'file-upload',
  templateUrl: 'file-upload.html'
})
export class FileUploadComponent {

  // Main task 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  //Caption for file uploaded
  caption: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) { }


  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)
    // Type of file
    var type = file.type.split('/')[0];
    // The storage path
    var path = `ccip/`;

    // Different path based on type
    switch (type) {
      case 'image':
        path += `images/${new Date().getTime()}_${file.name}`;
        break;
      case 'audio':
        path += `audio/${new Date().getTime()}_${file.name}`;
        break;
      case 'video':
        path += `videos/${new Date().getTime()}_${file.name}`;
        break;
      default:
        break;
    }

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image'
      && file.type.split('/')[0] !== 'audio'
      && file.type.split('/')[0] !== 'video'
    ) {
      console.error('unsupported file type :( ')
      return;
    }

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
            var coll;
            if (type == 'image'){
              coll = 'gallery';
            }else{
              coll = 'recordings';
            }
            // Update firestore on completion
            this.db.collection('apps').doc('ccip').collection(coll)
              .add({
                path,
                time: new Date(),
                caption: this.caption,
                feature: false,
                link: url,
                userID: "ids are not implemented yet",
                type: type
              });
          }
        )
      }
      )).subscribe();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

}