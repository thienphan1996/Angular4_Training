import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-privatesinhvien',
  templateUrl: './privatesinhvien.component.html',
  styleUrls: ['./privatesinhvien.component.css']
})
export class PrivatesinhvienComponent implements OnInit {

  link = true;
  maUser : any;
  constructor(public routerActive: ActivatedRoute) { }

  ngOnInit() {
    this.maUser = this.routerActive.snapshot.params['id'];
  }

  linkChange(){
    this.link = !this.link;
  }
}
