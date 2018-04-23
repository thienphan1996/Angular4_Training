import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-totnghiep',
  templateUrl: './totnghiep.component.html',
  styleUrls: ['./totnghiep.component.css']
})
export class TotnghiepComponent implements OnInit {

  allSinhVien : any[];
  dsSinhVien = new Array;
  showSinhVien : any[];
  constructor(public mydb : AngularFireDatabase) { 
    this.mydb.list("SinhVien").valueChanges().subscribe(data => {
      this.allSinhVien = data;
      for (let i = 0; i < this.allSinhVien.length; i++){
        let monHocTichLuy: any[] = this.allSinhVien[i]['monHocTichLuy'];
        let tongTinChi = 0;
        if (monHocTichLuy.length>0){
          for (let j = 0; j < monHocTichLuy.length; j++){
            tongTinChi += (+monHocTichLuy[j]['hocPhi']);
          }
        }
        if (tongTinChi >= 70){
          this.dsSinhVien.push(this.allSinhVien[i]);
          let strJsonSinhVien = JSON.stringify(this.dsSinhVien);
          this.showSinhVien = JSON.parse(strJsonSinhVien);
        }
      }
    });
  }

  ngOnInit() {
  }

}
