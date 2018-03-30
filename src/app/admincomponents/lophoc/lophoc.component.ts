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
  proyectos: Observable<any[]>;
  dsLopHoc : any[];
  index : number = -1;

  constructor(public mydb : AngularFireDatabase) {
    this.mydb.list("/LopHoc").valueChanges().subscribe(data =>{
      this.dsLopHoc = data;
    });
    // this.todosProyectos = this.mydb.list('LopHoc');
    // this.proyectos = this.todosProyectos.snapshotChanges().map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    // });
    // console.log(this.proyectos);
    
}

  ngOnInit() {
    
  }

  xuLyXoaLopHoc(i){
    this.index = i;
    this.todosProyectos = this.mydb.list('LopHoc');
    this.todosProyectos.snapshotChanges(['child_added']).subscribe(actions => {
      let key = actions[i].key;
      this.todosProyectos.remove(key);
      // actions.forEach(action => {
      //   console.log(action.type);
      //   console.log(action.key);
      //   console.log(action.payload.val());
      // });
    });
  }
}
