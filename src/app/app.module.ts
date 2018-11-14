import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Import pages
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { LocatePage } from '../pages/locate/locate';
import { ContactPage } from '../pages/contact/contact';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ManagePage } from '../pages/manage/manage';
import { SafePipe } from '../pipes/safe/safe';

//Firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireStorageModule } from 'angularfire2/storage'
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as env_firebase from '../environment/firebase';

@NgModule({
  declarations: [
    MyApp,
    SafePipe,
    MenuPage,
    TabsPage,
    WelcomePage,
    AboutPage,
    LocatePage,
    ContactPage,
    RegisterPage,
    LoginPage,
    ManagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(env_firebase.fireConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    TabsPage,
    WelcomePage,
    AboutPage,
    LocatePage,
    ContactPage,
    RegisterPage,
    LoginPage,
    ManagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
