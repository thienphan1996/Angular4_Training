import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-themmonhoc',
  templateUrl: './themmonhoc.component.html',
  styleUrls: ['./themmonhoc.component.css']
})
export class ThemmonhocComponent implements OnInit {

  maMonHoc : string;
  tenMonHoc : string;
  hocPhi : string;


  constructor(public mydb : AngularFireDatabase) { }

  ngOnInit() {
  }

  xuLyThemMonHoc(){
    let MonHoc = {
      "maMonHoc" : this.maMonHoc,
      "tenMonHoc" : this.tenMonHoc,
      "hocPhi" : this.hocPhi
    }
    this.mydb.list("/MonHoc").push(MonHoc);
  }
}
