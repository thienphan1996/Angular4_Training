import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {

  hoTen : string;
  namSinh : string;
  phone : string;
  nganhDangKy : number;
  dsNganh = ["Lập trình Android","Lập trình IOS","Lập trình Angular 4","Lập trình Laravel","Lập trình PHP","Lập trình Fron-End","Lập trình Java","Lập trình ASP.NET"];
  gioiTinh : string;
  isDangKy = false;

  constructor(public mydb: AngularFireDatabase) {
    
   }

  ngOnInit() {
  }

  xuLyDangKy(){
    let dangKy : any = {
      "hoTen" : this.hoTen,
      "namSinh" : this.namSinh,
      "phone" : this.phone,
      "gioiTinh" : this.gioiTinh,
      "nganhDangKy" : this.dsNganh[this.nganhDangKy]
    };
    this.mydb.list("/DangKy").push(dangKy);
    this.isDangKy = true;
  }
}
