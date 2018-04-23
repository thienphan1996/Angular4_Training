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
  todosMonDangHoc : AngularFireList<any>;
  sinhVienSelect : string;
  lopHocSelect : string;
  maSinhVien : string;
  dsSinhVien : any[];
  dsLopHoc : any[];
  dsSinhVienConLai : any[];
  indexSinhVien : number;
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
    this.todosMonDangHoc = this.mydb.list("SinhVien");
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
      //Thêm lớp đang học vào sinh viên
      for (let i = 0; i < this.dsSinhVien.length; i++){
        if (this.dsSinhVien[i]['maSinhVien'] == this.maSinhVien){
          this.indexSinhVien = i;
          break;
        }
      }
      let sinhVien = this.dsSinhVien[this.indexSinhVien];
      let arrNewMonHoc : Array<any> = sinhVien['monHocDangHoc'];
      let newMonHoc = {
        "maMonHoc" : lopHocObject['maLop'],
        "tenMonHoc" : lopHocObject['tenLop'],
        "phongHoc" : lopHocObject['phongHoc'],
        "thoiGian" : lopHocObject['thoiGianHoc'],
        "tietHoc" : lopHocObject['tietHoc'],
        "diemGiuaKy" : '',
        "diemCuoiKy" : '',
        "ketQua" : ''
      };
      arrNewMonHoc.push(newMonHoc);
      let addSinhVien = {
        "maSinhVien" : sinhVien['maSinhVien'],
        "tenSinhVien" : sinhVien['tenSinhVien'],
        "gioiTinh" : sinhVien['gioiTinh'],
        "namSinh" : sinhVien['namSinh'],
        "nganhHoc" : sinhVien['nganhHoc'],
        "monHocTichLuy" : sinhVien['monHocTichLuy'],
        "monHocDangHoc" : arrNewMonHoc
      };
      this.todosMonDangHoc.snapshotChanges(["child_added"]).subscribe(actions => {
        let keySinhVien = actions[this.indexSinhVien].key;
        this.todosMonDangHoc.set(keySinhVien,addSinhVien);
      });
    }
    else alert("Sinh viên đã tồn tại!");
  }
}
