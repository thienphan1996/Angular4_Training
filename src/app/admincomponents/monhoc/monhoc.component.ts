import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-monhoc',
  templateUrl: './monhoc.component.html',
  styleUrls: ['./monhoc.component.css']
})
export class MonhocComponent implements OnInit {

  dsMonHoc : any[];
  constructor(public mydb : AngularFireDatabase) { 
    this.mydb.list('MonHoc').valueChanges().subscribe(data =>{
      this.dsMonHoc = data;
    });
  }

  ngOnInit() {
  }

}
