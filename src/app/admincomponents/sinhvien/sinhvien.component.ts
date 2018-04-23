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
    
    
  }

  ngOnInit() {
    let init = true;
    this.mydb.list("SinhVien").valueChanges().subscribe(data =>{
      this.dsSinhVien = data;
      if (init){
        this.showSinhVien = this.dsSinhVien;
      }
      init = false;
    });
  }

  sinhVienExist(arrSinhVien : any[], sinhVien : any){
    for (let i = 0; i < arrSinhVien.length; i++){
      if (arrSinhVien[i]['maSinhVien'] == sinhVien['maSinhVien']){
        return true;
      }
    }
    return false;
  }

  changeSinhVienContent(tenCT){
    this.tenChuongTrinh = tenCT;
    let arrSinhVien = new Array();
    let sinhVienNganh = [];
    arrSinhVien = this.dsSinhVien;
    for (let i = 0; i < arrSinhVien.length; i++){
      if (tenCT == arrSinhVien[i]['nganhHoc'] && this.sinhVienExist(sinhVienNganh,arrSinhVien[i]) == false){
        sinhVienNganh.push(arrSinhVien[i]);
      }
    }
    this.showSinhVien = sinhVienNganh;
  }

  xuLyXoaSinhVien(item,i){
    let index : number;
    for (let i = 0; i < this.dsSinhVien.length; i++){
      if (this.dsSinhVien[i]['maSinhVien'] == item['maSinhVien']){
        index = i;
        break;
      }
    }
    this.showSinhVien.splice(i,1);
    this.todosSinhVien = this.mydb.list("SinhVien");
    this.todosSinhVien.snapshotChanges(["child_added"]).subscribe(actions => {
      if (index != -1){
        let key = actions[index].key;
        this.todosSinhVien.remove(key);
      }
      index = -1;
    });
    
  }
}
