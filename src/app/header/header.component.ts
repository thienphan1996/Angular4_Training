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

  maUser : string;
  checkLogin : boolean = false;
  logged = false;
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
    for (let i = 0; i < this.dsTaiKhoan.length; i++){
      if (this.dsTaiKhoan[i]['tenUser'] == this.tenTaiKhoan){
        this.maUser = this.dsTaiKhoan[i]['maUser'];
      }
    }
    for (i; i < this.dsTaiKhoan.length; i++){
      let JsonTaiKhoan = JSON.stringify(this.dsTaiKhoan[i]);
      let taiKhoan = JSON.parse(JsonTaiKhoan);
      let username = taiKhoan['tenUser'];
      let pass = taiKhoan['matKhau'];
      if (this.tenTaiKhoan==username && this.matKhau==pass){
        // const ob =  this.data.object('/TrangThai');
        // ob.update({"isLogin":"true"});
        // window.location.reload();
        islogin = true;
      }
    }
    if (this.tenTaiKhoan == "admin" && this.matKhau == "admin"){
      this.routerSevice.navigate(['/quanlydaotao']);
      window.location.reload();
      islogin = true;
    }
    if (this.maUser.substring(0,2) == "GV" && islogin == true){
      this.routerSevice.navigate(['/teacherhome']);
    }
    if (islogin == true) {
      this.checkLogin = false;
      this.logged = true;
    }
    else {
      this.checkLogin = true;
    }
  }

  xuLyDangXuat(){
    this.logged = false;
  }
  
}
