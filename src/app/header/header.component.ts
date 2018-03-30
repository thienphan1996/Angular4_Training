import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checkLogin : boolean = false;
  tenTaiKhoan: string;
  matKhau: string;
  dsTaiKhoan: any[];
  constructor(private data: AngularFireDatabase,private routerSevice: Router) {
    this.data.list("/TaiKhoan").valueChanges().subscribe(listtaikhoan => {
      this.dsTaiKhoan = listtaikhoan;
    })
    
   }

  ngOnInit() {
  }
  
  isLogin(){
    let i = 0;
    let islogin : boolean = false;
    for (i; i < this.dsTaiKhoan.length; i++){
      let JsonTaiKhoan = JSON.stringify(this.dsTaiKhoan[i]);
      let taiKhoan = JSON.parse(JsonTaiKhoan);
      let username = taiKhoan['tenTaiKhoan'];
      let pass = taiKhoan['matKhau'];
      if (this.tenTaiKhoan==username && this.matKhau==pass){
        // const ob =  this.data.object('/TrangThai');
        // ob.update({"isLogin":"true"});
        // window.location.reload();
        islogin = true;
      }
    }
    (islogin == true) ? this.checkLogin = false : this.checkLogin = true;
  }

  
}
