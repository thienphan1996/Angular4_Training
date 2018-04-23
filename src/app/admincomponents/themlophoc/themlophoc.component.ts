import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-themlophoc',
  templateUrl: './themlophoc.component.html',
  styleUrls: ['./themlophoc.component.css']
})
export class ThemlophocComponent implements OnInit {

  maLop : string;
  soLuong : string;
  tenGiaoVienDungLop : string;
  tenLopHoc : string;
  maLopHoc : string;
  thoiGianHoc : string;
  tietHoc : string;
  phongHoc : string;
  dsGiaoVien : any[];
  dsMonHoc : any[];

  constructor(public mydb : AngularFireDatabase) {
    this.mydb.list("GiaoVien").valueChanges().subscribe(data =>{
      this.dsGiaoVien = data;
    });
    this.mydb.list("MonHoc").valueChanges().subscribe(data => {
      this.dsMonHoc = data;
    });
   }

  ngOnInit() {
  }

  xuLyThemLop(){
    let lopHoc = {
      "maLop" : this.maLop,
      "tenLop" : this.tenLopHoc,
      "soLuong" : this.soLuong,
      "tenGiaoVien" : this.tenGiaoVienDungLop,
      "thoiGianHoc" : this.thoiGianHoc,
      "tietHoc" : this.tietHoc,
      "phongHoc" : this.phongHoc,
      "dsSinhVien" : [
        {
          "maSinhVien" : "",
          "tenSinhVien" : "",
          "diemGiuaKy" : "",
          "diemCuoiKy" : "",
          "ketQua" : ""
        }
      ]
    };
    this.mydb.list("/LopHoc").push(lopHoc);
  }
  onSelectMonHocChange(event){
    this.tenLopHoc = event;
  }
  onSelectChange(event){
    this.tenGiaoVienDungLop = event;
  }
}
