import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quanlydaotao',
  templateUrl: './quanlydaotao.component.html',
  styleUrls: ['./quanlydaotao.component.css']
})
export class QuanlydaotaoComponent implements OnInit {

  
  constructor(public mydb : AngularFireDatabase) { 
    
  }

  ngOnInit() {
  }

  

  

  
}
