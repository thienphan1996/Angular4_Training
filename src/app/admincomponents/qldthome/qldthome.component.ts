import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-qldthome',
  templateUrl: './qldthome.component.html',
  styleUrls: ['./qldthome.component.css']
})
export class QldthomeComponent implements OnInit {

  todosMonHoc : AngularFireList<any>;
  index = 0;
  dsChuongTrinh : any[];
  dsMonHoc : any[];
  objectListSubject = new Array();
  allMonHoc : any[];
  dsMonHocofCTDT : any;
  tenChuongTrinh : string = "Công nghệ thông tin";
  maMonHoc : string;
  monHocConLai = new Array();
  maMonHocSelect : any;
  showMonHoc = new Array();

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
          if (maMonHoc == jsonMaMonHoc && this.objectExist(this.showMonHoc,jsonMaMonHoc)==false){
            this.objectListSubject.push(jsonMonHoc);
          }
          else if (maMonHoc != jsonMaMonHoc && this.monHocExist(this.monHocConLai,jsonMaMonHoc)==false && this.monHocExist(this.dsMonHoc,jsonMaMonHoc)==false){
            this.monHocConLai.push(jsonMaMonHoc);
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
    this.monHocConLai.length = 0;
    this.showMonHoc.length = 0;
    this.getMonHocFromDB();
  }

  xoaChuongTrinhDaoTao(){
    this.todosMonHoc = this.mydb.list("ChuongTrinhDaoTao");
    this.todosMonHoc.snapshotChanges(["child_added"]).subscribe(action =>{
      let key = action[this.index].key;
      this.todosMonHoc.remove(key);
    });
    window.location.reload();
  }


  objectExist(object : any[],key : string){
    for (let i = 0; i < object.length;i++){
      if (object[i]['maMonHoc'] == key)
        return true;
    }
    return false;
  }

  monHocExist(arr : Array<string>,maMonHoc : string){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == maMonHoc){
        return true;
      }
    }
    return false;
  }

  showData(){
    for (let i = 0; i < this.objectListSubject.length; i++){
      let hocPhi = this.objectListSubject[i];
      let monHoc = JSON.parse(hocPhi);
      let maMonHoc = monHoc['maMonHoc'];
      if (this.objectExist(this.showMonHoc,maMonHoc)==false)
      this.showMonHoc.push(monHoc);
    }
    return this.showMonHoc;
  }
  xuLyThemMonHoc(){
    let arrNewDsMonHoc = this.dsMonHoc;
    arrNewDsMonHoc.push(this.maMonHocSelect);
    let newChuongTrinh = {
      "dsMonHoc" : arrNewDsMonHoc,
      "dsSinhVien" : this.dsChuongTrinh[this.index]['dsSinhVien'],
      "maCT" :  this.dsChuongTrinh[this.index]['maCT'],
      "tenCT" :  this.dsChuongTrinh[this.index]['tenCT']
    };
    this.todosMonHoc = this.mydb.list("ChuongTrinhDaoTao");
    this.todosMonHoc.snapshotChanges(["child_added"]).subscribe(action =>{
      let key = action[this.index].key;
      this.todosMonHoc.set(key,newChuongTrinh);
    });
  }
  xuLyXoaMonHoc(i){
    this.dsMonHoc.splice(i+2,1);
    let newChuongTrinh = {
      "dsMonHoc" : this.dsMonHoc,
      "dsSinhVien" : this.dsChuongTrinh[this.index]['dsSinhVien'],
      "maCT" :  this.dsChuongTrinh[this.index]['maCT'],
      "tenCT" :  this.dsChuongTrinh[this.index]['tenCT']
    };
    this.todosMonHoc = this.mydb.list("ChuongTrinhDaoTao");
    this.todosMonHoc.snapshotChanges(["child_added"]).subscribe(action =>{
      let key = action[this.index].key;
      this.todosMonHoc.set(key,newChuongTrinh);
    });
    this.objectListSubject.splice(i,1);
    this.showMonHoc.splice(i,1);
  }
  onSelectChange(event){
    this.maMonHocSelect = event;
  }
}
