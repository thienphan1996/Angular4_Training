import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privatesinhvien',
  templateUrl: './privatesinhvien.component.html',
  styleUrls: ['./privatesinhvien.component.css']
})
export class PrivatesinhvienComponent implements OnInit {

  link = true;
  constructor() { }

  ngOnInit() {
  }

  linkChange(){
    this.link = !this.link;
  }
}
