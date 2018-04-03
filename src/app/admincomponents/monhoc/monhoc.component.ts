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

  todosMonHoc : AngularFireList<any>;
  dsMonHoc : any[];
  isChange = false;
  newMaMonHoc = '';
  newTenMonHoc = '';
  newHocPhi = '';
  constructor(public mydb : AngularFireDatabase) { 
    this.mydb.list('MonHoc').valueChanges().subscribe(data =>{
      this.dsMonHoc = data;
    });
  }

  ngOnInit() {
  }

  xuLyXoaMonHoc(i){
    this.todosMonHoc = this.mydb.list("MonHoc");
    this.todosMonHoc.snapshotChanges(['child_added']).subscribe(actions => {
      let key = actions[i].key;
      this.todosMonHoc.remove(key);
    });
  }
  
  changeMonHoc(){
    this.isChange = true;
  }
  
  changedMonHoc(i){
    let newMonHoc = {
      "maMonHoc" : this.newMaMonHoc,
      "tenMonHoc" : this.newTenMonHoc,
      "hocPhi" : this.newHocPhi
    };
    this.todosMonHoc = this.mydb.list("MonHoc");
    this.todosMonHoc.snapshotChanges(['child_added']).subscribe(actions => {
      let key = actions[i].key;
      this.todosMonHoc.set(key,newMonHoc);
    });
    this.mydb.list('MonHoc').valueChanges().subscribe(data =>{
      this.dsMonHoc = data;
    });
    this.isChange = false;
    this.newHocPhi = this.newMaMonHoc = this.newTenMonHoc = '';
  }
  
  
  cancelChangeMonHoc(){
    this.isChange =false;
  }

  
}
