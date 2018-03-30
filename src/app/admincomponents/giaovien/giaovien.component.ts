import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-giaovien',
  templateUrl: './giaovien.component.html',
  styleUrls: ['./giaovien.component.css']
})
export class GiaovienComponent implements OnInit {

  dsGiaoVien : any[];
  constructor(public mydb : AngularFireDatabase) {
      this.mydb.list("GiaoVien").valueChanges().subscribe(data =>{
        this.dsGiaoVien = data;
      });
   }

  ngOnInit() {
  }

}
