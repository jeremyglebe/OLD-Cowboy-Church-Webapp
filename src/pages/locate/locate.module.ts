import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocatePage } from './locate';
import { SafePipe } from '../../pipes/safe/safe';

@NgModule({
  declarations: [
    LocatePage,
    SafePipe
  ],
  imports: [
    IonicPageModule.forChild(LocatePage),
  ],
})
export class LocatePageModule {}
