import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-monhoccuasinhvien',
  templateUrl: './monhoccuasinhvien.component.html',
  styleUrls: ['./monhoccuasinhvien.component.css']
})
export class MonhoccuasinhvienComponent implements OnInit {

  maUser = '';
  dsSinhVien : any[];
  sinhVien : any;
  monDangHoc : any[];
  constructor(public mydb : AngularFireDatabase, public routerActive : ActivatedRoute) { 
    this.mydb.list("SinhVien").valueChanges().subscribe(data => {
      this.dsSinhVien = data;
      for (let i = 0; i < this.dsSinhVien.length; i++){
        if (this.dsSinhVien[i]['maSinhVien'] == this.maUser){
          this.sinhVien = this.dsSinhVien[i];
          break;
        }
      }
      this.monDangHoc = this.sinhVien['monHocDangHoc'];
    });
  }

  ngOnInit() {
    this.maUser = this.routerActive.snapshot.params['id'];
  }

}
