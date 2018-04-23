import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.css']
})
export class TeacherhomeComponent implements OnInit {

  maUser : string;
  tenUser : string;
  dsGiaoVien : any[];
  constructor(public routerActive : ActivatedRoute,public mydb : AngularFireDatabase) { }

  ngOnInit() {
    this.maUser = this.routerActive.snapshot.params['id'];
    this.mydb.list("GiaoVien").valueChanges().subscribe(data => {
      this.dsGiaoVien = data;
      for (let i = 0; i < this.dsGiaoVien.length; i++){
        if (this.dsGiaoVien[i]['maGiaoVien'] == this.maUser){
          this.tenUser = this.dsGiaoVien[i]['tenGiaoVien'];
          break;
        }
      }
    });
    
  }

}
