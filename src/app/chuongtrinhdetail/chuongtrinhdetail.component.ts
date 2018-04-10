import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-chuongtrinhdetail',
  templateUrl: './chuongtrinhdetail.component.html',
  styleUrls: ['./chuongtrinhdetail.component.css']
})
export class ChuongtrinhdetailComponent implements OnInit {

  dsChuongTrinh : any[];
  dsMonHoc : any[];
  objectListSubject = new Array();
  allMonHoc : any[];
  index = 0;
  tenChuongTrinh = "Công nghệ thông tin";
  showMonHoc = [];
  constructor(public mydb : AngularFireDatabase) { 
    this.getMonHocFromDB();
  }

  ngOnInit() {
  }
  getMonHocFromDB(){
    this.mydb.list("MonHoc").valueChanges().subscribe(data =>{
      this.allMonHoc = data;
    });
    this.mydb.list("ChuongTrinhDaoTao").valueChanges().subscribe(data => {
      this.dsChuongTrinh = data;
      let jsonMonHoc = JSON.stringify(this.dsChuongTrinh[this.index]);
      this.dsMonHoc = JSON.parse(jsonMonHoc)["dsMonHoc"];
      for (let i = 0; i < this.dsMonHoc.length; i++){
        let maMonHoc : string = this.dsMonHoc[i];
        for (let j = 0; j < this.allMonHoc.length; j++){
          let monHoc = this.allMonHoc[j];
          let jsonMonHoc = JSON.stringify(monHoc);
          let jsonMaMonHoc : string = JSON.parse(jsonMonHoc)["maMonHoc"];
          if (maMonHoc == jsonMaMonHoc){
            this.objectListSubject.push(jsonMonHoc);
          }
        }
      }
    });
    
  }
  changeContent(event,i){
    this.index = i;
    this.tenChuongTrinh = event.target.innerText;
    this.dsChuongTrinh = null;
    this.objectListSubject.slice(0,this.objectListSubject.length);
    this.objectListSubject.length = 0;
    this.showMonHoc.length = 0;
    this.getMonHocFromDB();
  }
  showData(){
    for (let i = 0; i < this.objectListSubject.length; i++){
      let hocPhi = this.objectListSubject[i];
      let monHoc = JSON.parse(hocPhi);
      this.showMonHoc[i] = monHoc;
    }
    return this.showMonHoc;
  }
}
