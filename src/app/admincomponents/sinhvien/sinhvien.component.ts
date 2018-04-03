import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {

  dsChuongTrinhDT : any[];
  dsSinhVien : any[];
  showSinhVien : any[];
  tenChuongTrinh : string = '';
  todosSinhVien : AngularFireList<any>;
  constructor(public mydb : AngularFireDatabase) {
    this.mydb.list("ChuongTrinhDaoTao").valueChanges().subscribe(data =>{
      this.dsChuongTrinhDT = data;
    });
    this.mydb.list("SinhVien").valueChanges().subscribe(data =>{
      this.dsSinhVien = data;
      this.showSinhVien = data;
    });
    
  }

  ngOnInit() {
  }

  changeSinhVienContent(tenCT){
    this.tenChuongTrinh = tenCT;
    let arrSinhVien = new Array();
    let sinhVienNganh = [];
    arrSinhVien = this.dsSinhVien;
    for (let i = 0; i < arrSinhVien.length; i++){
      if (tenCT == arrSinhVien[i]['nganhHoc']){
        sinhVienNganh.push(arrSinhVien[i]);
      }
    }
    this.showSinhVien = sinhVienNganh;
  }

  xuLyXoaSinhVien(i){
    this.todosSinhVien = this.mydb.list("SinhVien");
    this.todosSinhVien.snapshotChanges(["child_added"]).subscribe(actions => {
      let key = actions[i].key;
      this.todosSinhVien.remove(key);
    });
  }
}
