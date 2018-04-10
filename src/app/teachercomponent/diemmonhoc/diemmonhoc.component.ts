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

  tenMonHoc : string;
  dsLopHoc : any[];
  dsSinhVien : any[];
  tenGiaoVien : string;
  thoiGianHoc : string;
  tietHoc : string;
  phongHoc : string;
  constructor(public mydb : AngularFireDatabase) {
    this.mydb.list("LopHoc").valueChanges().subscribe(data => {
      this.dsLopHoc = data;
      this.dsSinhVien = this.dsLopHoc[0]['dsSinhVien'];
      this.tenGiaoVien = this.dsLopHoc[0]['tenGiaoVien'];
      this.thoiGianHoc = this.dsLopHoc[0]['thoiGianHoc'];
      this.phongHoc = this.dsLopHoc[0]['phongHoc'];
      this.tietHoc = this.dsLopHoc[0]['tietHoc'];
    });
    
   }

  ngOnInit() {
  }

}
