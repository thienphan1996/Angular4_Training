import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-taikhoan',
  templateUrl: './taikhoan.component.html',
  styleUrls: ['./taikhoan.component.css']
})
export class TaikhoanComponent implements OnInit {

  dsTaiKhoanGiaoVien = [];
  dsTaiKhoanSinhVien = [];
  dsTaiKhoan = [];
  constructor(public mydb : AngularFireDatabase) { 
    this.mydb.list("TaiKhoan").valueChanges().subscribe(data => {
      this.dsTaiKhoan = data;
      for (let i = 0; i < this.dsTaiKhoan.length; i++){
        let maUser : string = this.dsTaiKhoan[i]['maUser'];
        if (maUser.substring(0,2) == 'GV'){
          this.dsTaiKhoanGiaoVien.push(this.dsTaiKhoan[i]);
        }
        else this.dsTaiKhoanSinhVien.push(this.dsTaiKhoan[i]);
      }
    });
    
  }

  ngOnInit() {
  }

  xuLyShowTaiKhoan(i){
      if (i==0){
        this.dsTaiKhoan = this.dsTaiKhoanGiaoVien;
      }
      else if (i == 1){
        this.dsTaiKhoan = this.dsTaiKhoanSinhVien;
      }
  }
}
