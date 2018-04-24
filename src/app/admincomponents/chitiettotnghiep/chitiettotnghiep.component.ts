import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chitiettotnghiep',
  templateUrl: './chitiettotnghiep.component.html',
  styleUrls: ['./chitiettotnghiep.component.css']
})
export class ChitiettotnghiepComponent implements OnInit {

  maSinhVien : string;
  dsMonHocTichLuy : any[];
  sinhVien : any;
  tongTinChi : string = '';
  diemTrungBinh : number = 0;
  constructor(public routerActive : ActivatedRoute,public mydb : AngularFireDatabase) { 

  }

  ngOnInit() {
    this.maSinhVien = this.routerActive.snapshot.params['id'];
    this.mydb.list("SinhVien").valueChanges().subscribe(data => {
      let dsSinhVien : any[] = data;
      for (let i = 0; i < dsSinhVien.length; i++){
        if (dsSinhVien[i]['maSinhVien'] == this.maSinhVien){
          this.dsMonHocTichLuy = dsSinhVien[i]['monHocTichLuy'];
          let tongKetQua = 0;
          let sum = 0;
          this.sinhVien = dsSinhVien[i];
          if (this.dsMonHocTichLuy.length > 0){
            for (let j = 0; j < this.dsMonHocTichLuy.length; j++){
              sum += (+this.dsMonHocTichLuy[j]['hocPhi']);
              tongKetQua += (+this.dsMonHocTichLuy[j]['ketQua']);
              this.tongTinChi = sum + '';
            }
            this.diemTrungBinh = Math.round(tongKetQua*1000)/(1000*this.dsMonHocTichLuy.length);
          }
          else {
            this.diemTrungBinh = 0;
            this.tongTinChi = '0';
          }
          break;
        }
      }

    });
  }

}
