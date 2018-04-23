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
import { DanhsachdangkyComponent } from './admincomponents/danhsachdangky/danhsachdangky.component';
import { ThemsinhvienComponent } from './admincomponents/themsinhvien/themsinhvien.component';
import { SinhvienComponent } from './admincomponents/sinhvien/sinhvien.component';
import { TaikhoanComponent } from './admincomponents/taikhoan/taikhoan.component';
import { ThemtaikhoanComponent } from './admincomponents/themtaikhoan/themtaikhoan.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NganhdaotaoComponent } from './nganhdaotao/nganhdaotao.component';
import { TeacherhomeComponent } from './teachercomponent/teacherhome/teacherhome.component';
import { ChuongtrinhdetailComponent } from './chuongtrinhdetail/chuongtrinhdetail.component';
import { ThemsinhvienvaolopComponent } from './teachercomponent/themsinhvienvaolop/themsinhvienvaolop.component';
import { DiemmonhocComponent } from './teachercomponent/diemmonhoc/diemmonhoc.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { PrivatesinhvienComponent } from './privatesinhvien/privatesinhvien.component';
import { ThongtinsinhvienComponent } from './thongtinsinhvien/thongtinsinhvien.component';
import { MonhoccuasinhvienComponent } from './monhoccuasinhvien/monhoccuasinhvien.component';
import { TotnghiepComponent } from './admincomponents/totnghiep/totnghiep.component';
import { InbangtotnghiepComponent } from './admincomponents/inbangtotnghiep/inbangtotnghiep.component';



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
    path: 'menudaotao',
    component: MenudaotaoComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'nganhdaotao',
        component: NganhdaotaoComponent
      },
      {
        path: 'doimatkhausinhvien',
        component: DoimatkhauComponent
      },
      {
        path: 'privatesinhvien/:id',
        component: PrivatesinhvienComponent,
        children: [
          {
            path: '',
            component: ThongtinsinhvienComponent
          },
          {
            path: 'thongtinsinhvien/:id',
            component: ThongtinsinhvienComponent
          },
          {
            path: 'monhoccuasinhvien/:id',
            component: MonhoccuasinhvienComponent
          }
        ]
      },
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
      }
    ]
  },
  {
    path: 'quanlydaotao',
    component: QuanlydaotaoComponent,
    children: [
      {
        path: '',
        component: QldthomeComponent
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
      },
      {
        path: 'dsdangky',
        component: DanhsachdangkyComponent
      },
      {
        path: 'sinhvien',
        component: SinhvienComponent,
        children: [
          {
            path: '',
            component: SinhvienComponent
          }
        ]
      },
      {
        path: 'taikhoan',
        component: TaikhoanComponent
      },
      {
        path: 'totnghiep',
        component: TotnghiepComponent
      },
      {
        path: 'diemmonhoc/:id',
        component: DiemmonhocComponent
      },
      {
        path: 'doimatkhauadmin',
        component: DoimatkhauComponent
      },
      {
        path: 'inbang/:id',
        component: InbangtotnghiepComponent
      }
    ]
  },
  {
    path:'teacherhome/:id',
    component: TeacherhomeComponent,
    children: [
      {
        path: '',
        component: ChuongtrinhdetailComponent
      },
      {
        path: 'chuongtrinhdetail',
        component: ChuongtrinhdetailComponent
      },
      {
        path: 'diemmonhoc/:id',
        component: DiemmonhocComponent
      },
      {
        path: 'doimatkhauteacher',
        component: DoimatkhauComponent
      }
    ]
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
    GiaovienComponent,
    DanhsachdangkyComponent,
    ThemsinhvienComponent,
    SinhvienComponent,
    TaikhoanComponent,
    ThemtaikhoanComponent,
    HomepageComponent,
    NganhdaotaoComponent,
    TeacherhomeComponent,
    ChuongtrinhdetailComponent,
    ThemsinhvienvaolopComponent,
    DiemmonhocComponent,
    DoimatkhauComponent,
    PrivatesinhvienComponent,
    ThongtinsinhvienComponent,
    MonhoccuasinhvienComponent,
    TotnghiepComponent,
    InbangtotnghiepComponent,
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
