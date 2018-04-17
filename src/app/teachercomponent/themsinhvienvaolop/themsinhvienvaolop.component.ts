import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-themsinhvienvaolop',
  templateUrl: './themsinhvienvaolop.component.html',
  styleUrls: ['./themsinhvienvaolop.component.css']
})
export class ThemsinhvienvaolopComponent implements OnInit {

  todosSinhVien : AngularFireList<any>;
  sinhVienSelect : string;
  lopHocSelect : string;
  maSinhVien : string;
  dsSinhVien : any[];
  dsLopHoc : any[];
  dsSinhVienConLai : any[];
  constructor(public mydb: AngularFireDatabase) {
    this.mydb.list("SinhVien").valueChanges().subscribe(data => {
      this.dsSinhVien = data;
    });
    this.mydb.list("LopHoc").valueChanges().subscribe(data => {
      this.dsLopHoc = data;
    });
   }

  ngOnInit() {
  }

  onSelectChange(event){
    this.sinhVienSelect = event['tenSinhVien'];
    this.maSinhVien = event['maSinhVien'];
  }

  onSelectLopHocChange(event){
    this.lopHocSelect = event;
  }
  
  sinhVienExist(arrSinhVien : any[],maSV : string){
    for (let i = 0 ; i < arrSinhVien.length; i++){
      if (maSV == arrSinhVien[i]['maSinhVien'])
        return true;
    }
    return false;
  }

  xuLyThemSinhVien(){
    this.dsSinhVienConLai = this.dsSinhVien;
    this.todosSinhVien = this.mydb.list("LopHoc");
    let find = 0;
    for (let i = 0; i < this.dsLopHoc.length; i++){
      if (this.dsLopHoc[i]['tenLop'] == this.lopHocSelect){
        find = i;
        break;
      }
    }
    let lopHocObject = this.dsLopHoc[find];
    let arrSinhVien : Array<any> = lopHocObject['dsSinhVien'];
    let newSinhVien = {
      "maSinhVien" : this.maSinhVien,
      "tenSinhVien" : this.sinhVienSelect,
      "diemGiuaKy" : "",
      "diemCuoiKy" : "",
      "ketQua" : ""
    };
    if (this.sinhVienExist(arrSinhVien,this.maSinhVien) == false){
      arrSinhVien.push(newSinhVien);
      let newLopHoc = {
        "dsSinhVien" : arrSinhVien,
        "maLop" : lopHocObject['maLop'],
        "tenLop" : lopHocObject['tenLop'],
        "thoiGianHoc" : lopHocObject['thoiGianHoc'],
        "tietHoc" : lopHocObject['tietHoc'],
        "phongHoc" : lopHocObject['phongHoc'],
        "soLuong" : lopHocObject['soLuong'],
        "tenGiaoVien" : lopHocObject['tenGiaoVien']
      };
      this.todosSinhVien.snapshotChanges(["child_added"]).subscribe(action => {
          let key = action[find].key;
          this.todosSinhVien.set(key,newLopHoc);
      });
    }
    else alert("Sinh viên đã tồn tại!");
  }
}
