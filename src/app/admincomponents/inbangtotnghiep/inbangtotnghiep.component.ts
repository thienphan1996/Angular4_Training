import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-inbangtotnghiep',
  templateUrl: './inbangtotnghiep.component.html',
  styleUrls: ['./inbangtotnghiep.component.css']
})
export class InbangtotnghiepComponent implements OnInit {

  maSinhVien : string;
  sinhVien : any;
  xepLoai : any;
  constructor(public routerActive : ActivatedRoute,public mydb : AngularFireDatabase) { }

  ngOnInit() {
  this.maSinhVien = this.routerActive.snapshot.params['id'];
  this.mydb.list("SinhVien").valueChanges().subscribe(data => {
    let dsSinhVien = data;
    for (let i = 0 ; i < dsSinhVien.length; i++){
      if (dsSinhVien[i]['maSinhVien'] == this.maSinhVien){
        this.sinhVien = dsSinhVien[i];
        break;
      }
    }
    let monHocTichLuy : any[] = this.sinhVien['monHocTichLuy'];
    let diemTrungBinh = 0;
    for (let i = 0 ; i < monHocTichLuy.length; i++){
      diemTrungBinh += (+monHocTichLuy[i]['ketQua']);
    }
    diemTrungBinh /= monHocTichLuy.length;
    if (diemTrungBinh >= 8)  this.xepLoai = 'Giỏi';
    else if (diemTrungBinh >= 6.5) this.xepLoai = 'Khá';
    else this.xepLoai = 'Trung bình';
  });
  }

}
