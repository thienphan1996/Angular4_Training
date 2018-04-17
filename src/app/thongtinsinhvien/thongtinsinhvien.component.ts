import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-thongtinsinhvien',
  templateUrl: './thongtinsinhvien.component.html',
  styleUrls: ['./thongtinsinhvien.component.css']
})
export class ThongtinsinhvienComponent implements OnInit {

  dsSinhVien :  any[];
  maUser = 'SV42';
  sinhVien : any;
  tongTinChi : number = 0;
  constructor(public mydb : AngularFireDatabase) {
    this.mydb.list("SinhVien").valueChanges().subscribe(data => {
      this.dsSinhVien = data;
      for (let i = 0; i < this.dsSinhVien.length; i++){
        if (this.dsSinhVien[i]['maSinhVien'] == this.maUser){
          this.sinhVien = this.dsSinhVien[i];
          break;
        }
      }
      let dsMonHocTichLuy : any[] = this.sinhVien['monHocTichLuy'];
      for (let i = 0 ; i < dsMonHocTichLuy.length; i++){
        this.tongTinChi += (+dsMonHocTichLuy[i]['hocPhi']);
      }
    });
   }

  ngOnInit() {
  }

}
