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

  dsDangKy : any[];
  constructor(public mydb : AngularFireDatabase) { 
    this.mydb.list("DangKy").valueChanges().subscribe(data =>{
      this.dsDangKy = data;
    });
  }

  ngOnInit() {
  }

}
