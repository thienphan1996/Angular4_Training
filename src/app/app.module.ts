import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CtdaotaoComponent } from './ctdaotao/ctdaotao.component';
import { MenudaotaoComponent } from './menudaotao/menudaotao.component';
import { AndroidComponent } from './components/android/android.component';
import { IosComponent } from './components/ios/ios.component';
import { AngularComponent } from './components/angular/angular.component';
import { LaravelComponent } from './components/laravel/laravel.component';
import { PhpComponent } from './components/php/php.component';
import { JavaComponent } from './components/java/java.component';
import { FronendComponent } from './components/fronend/fronend.component';
import { AspnetComponent } from './components/aspnet/aspnet.component';
import { DangkyComponent } from './components/dangky/dangky.component';
import  { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { QuanlydaotaoComponent } from './admincomponents/quanlydaotao/quanlydaotao.component';
import { ThemchuongtrinhComponent } from './admincomponents/themchuongtrinh/themchuongtrinh.component';
import { ChitietchuongtrinhComponent } from './admincomponents/chitietchuongtrinh/chitietchuongtrinh.component';
import { ThemmonhocComponent } from './admincomponents/themmonhoc/themmonhoc.component';
import { QldthomeComponent } from './admincomponents/qldthome/qldthome.component';
import { LophocComponent } from './admincomponents/lophoc/lophoc.component';
import { ThemlophocComponent } from './admincomponents/themlophoc/themlophoc.component';
import { MonhocComponent } from './admincomponents/monhoc/monhoc.component';
import { ThemgiaovienComponent } from './admincomponents/themgiaovien/themgiaovien.component';
import { GiaovienComponent } from './admincomponents/giaovien/giaovien.component';



export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBoZKe0RZ9MrNfLrmMkobIDjaPfWZ-9RVA",
    authDomain: "mydb-eec10.firebaseapp.com",
    databaseURL: "https://mydb-eec10.firebaseio.com",
    projectId: "mydb-eec10",
    storageBucket: "mydb-eec10.appspot.com",
    messagingSenderId: "573635889270"
  }
};

const appRouter: Routes = [
  {
    path: 'ctdaotao',
    component: CtdaotaoComponent,
    children: [
      {
        path: 'android',
        component: AndroidComponent
      },
      {
        path: '',
        component: AndroidComponent
      },
      {
        path: 'angular',
        component: AngularComponent
      },
      {
        path: 'ios',
        component: IosComponent
      },
      {
        path: 'aspnet',
        component: AspnetComponent
      },
      {
        path: 'fronend',
        component: FronendComponent
      },
      {
        path: 'java',
        component: JavaComponent
      },
      {
        path: 'laravel',
        component: LaravelComponent
      },
      {
        path: 'php',
        component: PhpComponent
      }
    ]
  },
  {
    path: 'menudaotao',
    component: MenudaotaoComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'qldthome',
    component: QldthomeComponent
  },
  {
    path: 'lophoc',
    component: LophocComponent
  },
  {
    path: 'monhoc',
    component: MonhocComponent
  },
  {
    path: 'giaovien',
    component: GiaovienComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CtdaotaoComponent,
    MenudaotaoComponent,
    AndroidComponent,
    IosComponent,
    AngularComponent,
    LaravelComponent,
    PhpComponent,
    JavaComponent,
    FronendComponent,
    AspnetComponent,
    DangkyComponent,
    QuanlydaotaoComponent,
    ThemchuongtrinhComponent,
    ChitietchuongtrinhComponent,
    ThemmonhocComponent,
    QldthomeComponent,
    LophocComponent,
    ThemlophocComponent,
    MonhocComponent,
    ThemgiaovienComponent,
    GiaovienComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
