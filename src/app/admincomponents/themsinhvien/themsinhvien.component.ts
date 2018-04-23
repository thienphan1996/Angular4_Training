import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-themsinhvien',
  templateUrl: './themsinhvien.component.html',
  styleUrls: ['./themsinhvien.component.css']
})
export class ThemsinhvienComponent implements OnInit {

  maSinhVien : string;
  tenSinhVien : string;
  namSinh : string;
  gioiTinh : string;
  nganhHocSelect : string;
  dsMonHoc : any[];
  constructor(public mydb : AngularFireDatabase) { 
    this.mydb.list("ChuongTrinhDaoTao").valueChanges().subscribe(data =>{
      this.dsMonHoc = data;
    });
  }

  ngOnInit() {
  }

  onSelectChange(event){
    this.nganhHocSelect = event;
  }
  xuLyThemSinhVien(){
    let sinhVien = {
      "maSinhVien" : this.maSinhVien,
      "tenSinhVien" : this.tenSinhVien,
      "namSinh" : this.namSinh,
      "gioiTinh" : this.gioiTinh,
      "nganhHoc" : this.nganhHocSelect,
      "monHocTichLuy" : [
        {
          "diemCuoiKy" : "",
          "diemGiuaKy" : "",
          "ketQua" : "",
          "maMonHoc" : "",
          "tenMonHoc" : "",
        } 
      ],
      "monHocDangHoc" : [
        {
          "diemCuoiKy" : "",
          "diemGiuaKy" : "",
          "ketQua" : "",
          "maMonHoc" : "",
          "phongHoc" : "",
          "tenMonHoc" : "",
          "thoiGian" : "",
          "tietHoc" : ""
        }
      ]
    };
    this.mydb.list("SinhVien").push(sinhVien);
  }
}
