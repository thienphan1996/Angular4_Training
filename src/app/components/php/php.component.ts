import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.css']
})
export class PhpComponent implements OnInit {

  nganhHoc: string;
  mssv: string;
  ten: string;

  data: any[];
  sinhvien: any;

  constructor(public af: AngularFireDatabase) {
    this.af.list('/TaiKhoan').valueChanges().subscribe(data =>{
      this.data = data;
    });
    console.log(this.sinhvien);
   }

  ngOnInit() {
  }

  NhapSinhVien(){
    this.sinhvien = {
      "tenTaiKhoan": this.mssv,
      "matKhau" : this.ten,
    };
    this.af.list("/TaiKhoan/").push(this.sinhvien);
  }
}
