import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignIn } from '../pages/auth/signin/signin';
import { SignUp } from '../pages/auth/signup/signup';
import { Wellcome } from '../pages/wellcome/wellcome'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook'
import { AuthService } from '../providers/auth-provider';

import { AngularFireModule } from 'angularfire2';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignIn,
    SignUp,
    Wellcome
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA2wLG203f-O0KS5iym8GvcCJJFL4KCV2I",
      authDomain: "prestacontas-22b1c.firebaseapp.com",
      databaseURL: "https://prestacontas-22b1c.firebaseio.com",
      storageBucket: "prestacontas-22b1c.appspot.com"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignIn,
    SignUp,
    Wellcome
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Facebook
  ]
})
export class AppModule {}
