import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage'
import { HttpModule } from '@angular/http'

import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { EditPage } from '../pages/edit/edit'
import { ActionsPage } from '../pages/actions/actions'
import { RecipeService } from './recipe.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditPage,
    ActionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__culidex',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditPage,
    ActionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RecipeService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
