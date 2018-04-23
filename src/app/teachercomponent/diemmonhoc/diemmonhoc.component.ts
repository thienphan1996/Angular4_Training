import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-diemmonhoc',
  templateUrl: './diemmonhoc.component.html',
  styleUrls: ['./diemmonhoc.component.css']
})
export class DiemmonhocComponent implements OnInit {

  todosDiemMonHoc : AngularFireList<any>;
  todosDiemSinhVien : AngularFireList<any>;
  tenMonHoc : string;
  dsLopHoc : any[];
  tenLopHoc : string;
  dsSinhVien : any[];
  maSinhVien : string;
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
  tenUser : string;
  adminUser : boolean = false;
  constructor(public mydb : AngularFireDatabase,public routerActive : ActivatedRoute) {
    
   }

  ngOnInit() {
    this.getDataFromDB();
  }

  contentExist(arr : any[],key : string){
    for (let i = 0; i < arr.length; i++){
      if (arr[i]['tenLop'] == key){
        return true;
      }
    }
    return false;
  }

  getDataFromDB(){
    this.tenUser = this.routerActive.snapshot.params['id'];
    if (this.tenUser == 'admin'){
      this.adminUser = true;
    }
    this.mydb.list("LopHoc").valueChanges().subscribe(data => {
      this.dsLopHoc = data;
      if (this.adminUser == false){
        let arrLopHoc : Array<any> = new Array;
        for (let i = 0; i < this.dsLopHoc.length; i++){
          if (this.dsLopHoc[i]['tenGiaoVien'] == this.tenUser && this.contentExist(arrLopHoc,this.dsLopHoc[i]['tenLop']) == false){
            arrLopHoc.push(this.dsLopHoc[i]);
          }
        }
        this.dsLopHoc = arrLopHoc;
      }
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
    this.maSinhVien = item['maSinhVien'];
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
    //Thêm điểm cho sinh viên
    let allSinhVien : any[];
    let findSinhVien = 0;
    let newSinhVien : any;
    this.mydb.list("SinhVien").valueChanges().subscribe(data => {
        allSinhVien = data;
        for (let i = 0; i < allSinhVien.length; i++){
          if (allSinhVien[i]['maSinhVien'] == this.maSinhVien){
            findSinhVien = i;
            newSinhVien = allSinhVien[i];
            break;
          }
        }
        let tenLopHoc : string = this.dsLopHoc[this.indexChange]['tenLop'];
        this.todosDiemSinhVien = this.mydb.list("SinhVien");
        let monHocDangHoc : Array<any> = newSinhVien['monHocDangHoc'];
        for (let i = 0; i < monHocDangHoc.length; i++){
          if (monHocDangHoc[i]['tenMonHoc'] == tenLopHoc){
            monHocDangHoc[i]['diemGiuaKy'] = this.newDiemGiuaKy;
            monHocDangHoc[i]['diemCuoiKy'] = this.newDiemCuoiKy;
            if (this.newDiemCuoiKy != ''){
              monHocDangHoc[i]['ketQua'] = ((+this.newDiemGiuaKy)+(+this.newDiemCuoiKy)) + '';
            }
            break;
          }
        }
        newSinhVien['monHocDangHoc'] = monHocDangHoc;
        this.todosDiemSinhVien.snapshotChanges(["child_added"]).subscribe(actions => {
          let key = actions[findSinhVien].key;
          this.todosDiemSinhVien.set(key,newSinhVien);
        });
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
