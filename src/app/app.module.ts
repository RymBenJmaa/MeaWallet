import { Coin2Service } from './../services/coin2.service';
import { PlayService } from './../services/play.service';
import { MeaService } from './../services/mea.service';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/signup/signup';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { TestPage } from '../pages/test/test';
import { Coin1Service } from '../services/coin1.service';
import { TransactionPage } from '../pages/transaction/transaction';
@NgModule({
  declarations: [
    
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    TestPage,
    TransactionPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    TestPage,
    TransactionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    MeaService,
    PlayService,
    Coin1Service,
    Coin2Service,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
