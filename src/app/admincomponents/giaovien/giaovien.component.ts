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

  todosGiaoVien : AngularFireList<any>;
  newSubject = '';
  dsGiaoVien : any[];
  isChange = false;
  indexChange = -1;
  constructor(public mydb : AngularFireDatabase) {
      this.mydb.list("GiaoVien").valueChanges().subscribe(data =>{
        this.dsGiaoVien = data;
      });
   }

  ngOnInit() {
  }

  xuLyXoaGiaoVien(i){
    this.todosGiaoVien = this.mydb.list("GiaoVien");
    this.todosGiaoVien.snapshotChanges(["child_added"]).subscribe(action =>{
      let key = action[i].key;
      this.todosGiaoVien.remove(key);
    });
  }

  xuLySuaGiaoVien(i){
    this.indexChange = i;
    this.isChange = true;
  }
  xuLyHuyChange(){
    this.isChange = false;
  }
  changedGiaoVien(i,maGiaoVien,tenGiaoVien,gioiTinh,namSinh){
    let giaoVien = {
      "maGiaoVien" : maGiaoVien,
      "tenGiaoVien" : tenGiaoVien,
      "gioiTinh" : gioiTinh,
      "namSinh" : namSinh,
      "monDungLop" : this.newSubject
    };
    this.todosGiaoVien = this.mydb.list("GiaoVien");
    this.todosGiaoVien.snapshotChanges(["child_added"]).subscribe(actions => {
      let key = actions[i].key;
      this.todosGiaoVien.set(key,giaoVien);
    });
    this.isChange = false;
    this.newSubject = '';
  }
  checkChange(i:number){
    if (this.indexChange==i && this.isChange == true){
      return true;
    }
    return false;
  }
}
