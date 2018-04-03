import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-themtaikhoan',
  templateUrl: './themtaikhoan.component.html',
  styleUrls: ['./themtaikhoan.component.css']
})
export class ThemtaikhoanComponent implements OnInit {

  maTaiKhoan = '';
  tenTaiKhoan = '';
  matKhau = '';
  dsTaiKhoan : any[];
  constructor(public mydb : AngularFireDatabase) { 
    this.mydb.list("TaiKhoan").valueChanges().subscribe(data => {
      this.dsTaiKhoan = data;
    });
  }

  ngOnInit() {
  }

  xuLyThemTaiKhoan(){
    let taiKhoan = {
      "maUser" : this.maTaiKhoan,
      "tenUser" : this.tenTaiKhoan,
      "matKhau" : this.matKhau
    };
    this.mydb.list("TaiKhoan").push(taiKhoan);
  }
}
