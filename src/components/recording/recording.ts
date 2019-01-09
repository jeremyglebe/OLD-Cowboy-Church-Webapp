import { Component } from '@angular/core';

@Component({
  selector: 'recording',
  inputs: ['rec_info'],
  templateUrl: 'recording.html'
})
export class RecordingComponent {

  text: string;
  rec_info: any;

  constructor() {
    console.log('Hello RecordingComponent Component');
    this.text = 'Hello World';
  }

}
