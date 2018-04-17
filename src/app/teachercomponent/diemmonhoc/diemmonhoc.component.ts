import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-diemmonhoc',
  templateUrl: './diemmonhoc.component.html',
  styleUrls: ['./diemmonhoc.component.css']
})
export class DiemmonhocComponent implements OnInit {

  todosDiemMonHoc : AngularFireList<any>;
  tenMonHoc : string;
  dsLopHoc : any[];
  tenLopHoc : string;
  dsSinhVien : any[];
  tenGiaoVien : string;
  thoiGianHoc : string;
  tietHoc : string;
  phongHoc : string;
  indexChange : number = 0;
  indexSinhVien = -1;
  isChange = false;
  newDiemGiuaKy : any;
  newDiemCuoiKy : any;
  isDelete = false;
  constructor(public mydb : AngularFireDatabase) {
    this.getDataFromDB();
   }

  ngOnInit() {
  }

  getDataFromDB(){
    this.mydb.list("LopHoc").valueChanges().subscribe(data => {
      this.dsLopHoc = data;
      this.dsSinhVien = this.dsLopHoc[this.indexChange]['dsSinhVien'];
      this.tenGiaoVien = this.dsLopHoc[this.indexChange]['tenGiaoVien'];
      this.thoiGianHoc = this.dsLopHoc[this.indexChange]['thoiGianHoc'];
      this.phongHoc = this.dsLopHoc[this.indexChange]['phongHoc'];
      this.tietHoc = this.dsLopHoc[this.indexChange]['tietHoc'];
      this.tenLopHoc = this.dsLopHoc[this.indexChange]['tenLop'];
    });
  }

  xuLyNhapDiem(item,i){
    this.indexSinhVien = i;
    this.isChange = true;
    this.newDiemGiuaKy = item['diemGiuaKy'];
    this.newDiemCuoiKy = item['diemCuoiKy'];
    console.log(this.dsSinhVien);
  }

  changLopHoc(event,i){
    this.tenLopHoc = event.target.innerText;
    this.indexChange = i;
    this.getDataFromDB();
  }

  xuLyHuyNhapDiem(){
    this.isChange = false;
  }
  xuLyXongNhapDiem(i){
    this.todosDiemMonHoc = this.mydb.list("LopHoc");
    this.dsSinhVien[i]['diemGiuaKy'] = this.newDiemGiuaKy;
    this.dsSinhVien[i]['diemCuoiKy'] = this.newDiemCuoiKy;
    if (this.newDiemCuoiKy != ''){
      this.dsSinhVien[i]['ketQua'] = ((+this.newDiemGiuaKy)+(+this.newDiemCuoiKy)) + '';
    }
    this.dsLopHoc[this.indexChange]['dsSinhVien'] = this.dsSinhVien;
    this.todosDiemMonHoc.snapshotChanges(["child_added"]).subscribe(action => {
      let key = action[this.indexChange].key;
      this.todosDiemMonHoc.set(key,this.dsLopHoc[this.indexChange]);
    });
    this.isChange = false;
  }

  xuLyXoaSinhVien(i){
    this.dsSinhVien.splice(i,1);
    this.todosDiemMonHoc = this.mydb.list("LopHoc");
    this.dsLopHoc[this.indexChange]['dsSinhVien'] = this.dsSinhVien;
    this.todosDiemMonHoc.snapshotChanges(["child_added"]).subscribe(action => {
      let key = action[this.indexChange].key;
      this.todosDiemMonHoc.set(key,this.dsLopHoc[this.indexChange]);
    });
    alert('Đã xoá sinh viên');
  }

  checkChange(i : number){
    if (this.indexSinhVien == i && this.isChange == true){
      return true;
    }
    return false;
  }
}
