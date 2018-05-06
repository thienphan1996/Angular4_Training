import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-danhsachdangky',
  templateUrl: './danhsachdangky.component.html',
  styleUrls: ['./danhsachdangky.component.css']
})
export class DanhsachdangkyComponent implements OnInit {

  dsTamHoan = new Array();
  dsSinhVien : any[];
  constructor(public mydb : AngularFireDatabase) { 
    this.mydb.list("SinhVien").valueChanges().subscribe(data =>{
      this.dsSinhVien = data;
      for (let i = 0; i < this.dsSinhVien.length; i++){
          if (this.dsSinhVien[i]['trangThai'] == "Tạm hoãn"){
            this.dsTamHoan.push(this.dsSinhVien[i]);
          }
      }
    });
  }

  ngOnInit() {
  }

}
