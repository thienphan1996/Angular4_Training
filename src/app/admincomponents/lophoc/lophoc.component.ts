import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-lophoc',
  templateUrl: './lophoc.component.html',
  styleUrls: ['./lophoc.component.css']
})
export class LophocComponent implements OnInit {
  
  todosProyectos: AngularFireList<any>;
  fireObject: AngularFireObject<any>;
  proyectos: Observable<any[]>;
  dsLopHoc : any[];
  index : number = -1;

  constructor(public mydb : AngularFireDatabase) {
    this.mydb.list("/LopHoc").valueChanges().subscribe(data =>{
      this.dsLopHoc = data;
    });
}

  ngOnInit() {
    
  }

  xuLyXoaLopHoc(i){
    this.index = i;
    this.todosProyectos = this.mydb.list('LopHoc');
    this.todosProyectos.snapshotChanges().subscribe(actions => {
        if (this.index >= 0){
          let key = actions[this.index].key;
          this.todosProyectos.remove(key);
        }
        this.index = -1;
    });
  }
}
