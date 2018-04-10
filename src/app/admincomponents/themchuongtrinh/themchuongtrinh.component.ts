import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-themchuongtrinh',
  templateUrl: './themchuongtrinh.component.html',
  styleUrls: ['./themchuongtrinh.component.css']
})
export class ThemchuongtrinhComponent implements OnInit {

  maChuongTrinh : string;
  tenChuongTrinh : string;

  constructor(public mydb : AngularFireDatabase) { }

  ngOnInit() {
  }
  xuLyThemCTDT(){
    let chuongTrinh = {
      "maCT" : this.maChuongTrinh,
      "tenCT" : this.tenChuongTrinh,
      "dsMonHoc" : [
        "CT000","CT001"
      ],
      "dsSinhVien" : [
        "B000000","B000001"
      ]
    };
    this.mydb.list("ChuongTrinhDaoTao").push(chuongTrinh);
    window.location.reload();
  }
}
