import { AboutPage } from './../pages/about/about';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Modules imported
import { Environment } from '../environment/environment';
import { PipesModule } from './../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
//Components imported
import { GalleryImageComponent } from './../components/gallery-image/gallery-image';
import { RecordingComponent } from '../components/recording/recording';
import { FileUploadComponent } from './../components/file-upload/file-upload';
//Providers imported
import { DatabaseProvider } from '../providers/database/database';
//Firestore & AngularFire modules imported
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
//Page modules imported
import { MenuPage } from './../pages/menu/menu';
import { ContactPage } from './../pages/contact/contact';
import { UsersPage } from './../pages/users/users';
import { LoginPage } from './../pages/login/login';
import { FindPage } from './../pages/find/find';
import { TabsPage } from './../pages/tabs/tabs';
import { WelcomePage } from './../pages/welcome/welcome';
import { GalleryPage } from './../pages/gallery/gallery';
import { RecordingsPage } from '../pages/recordings/recordings';
import { UploadPage } from './../pages/upload/upload';
import { AuthProvider } from '../providers/auth/auth';
import { RegisterPage } from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    //Pages
    MenuPage,
    TabsPage,
    WelcomePage,
    AboutPage,
    FindPage,
    ContactPage,
    RegisterPage,
    LoginPage,
    GalleryPage,
    RecordingsPage,
    UsersPage,
    UploadPage,
    //Components
    GalleryImageComponent,
    RecordingComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //AngularFire
    AngularFireModule.initializeApp(Environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    //Others
    PipesModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //Pages
    MenuPage,
    TabsPage,
    WelcomePage,
    AboutPage,
    FindPage,
    ContactPage,
    RegisterPage,
    LoginPage,
    GalleryPage,
    RecordingsPage,
    UsersPage,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    AuthProvider
  ]
})
export class AppModule {}
