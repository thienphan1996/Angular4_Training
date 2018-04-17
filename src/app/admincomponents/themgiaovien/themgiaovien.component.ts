import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-themgiaovien',
  templateUrl: './themgiaovien.component.html',
  styleUrls: ['./themgiaovien.component.css']
})
export class ThemgiaovienComponent implements OnInit {

  maGiaoVien : string;
  tenGiaoVien : string;
  namSinh : string;
  gioiTinh : string;
  dsMonHoc : any[];
  monHocSelect : any;
  phone : any;
  constructor(public mydb : AngularFireDatabase) {
    this.mydb.list("MonHoc").valueChanges().subscribe(data =>{
      this.dsMonHoc = data;
    });
   }

  ngOnInit() {
  }

  xuLyThemGiaoVien(){
    (this.gioiTinh=='male') ? this.gioiTinh = 'Nam' : this.gioiTinh = 'Nữ';
    let giaoVien = {
      "maGiaoVien" : this.maGiaoVien,
      "tenGiaoVien" : this.tenGiaoVien,
      "namSinh" : this.namSinh,
      "gioiTinh" : this.gioiTinh,
      "phone" : this.phone,
      "monDungLop" : this.monHocSelect
    };
    this.mydb.list("/GiaoVien").push(giaoVien);
  }
  onSelectChange(event){
    this.monHocSelect = event;
  }
}
