import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  infoReceive1: string[] = [];
  // infoReceive2: string[] = [];
  // infoReceive3: string[] = [];

  getInfoFromService1() {
    this.infoReceive1 = this.service.getInfo1();
  }
  getInfoFromService2() {
    this.infoReceive1 = this.service.getInfo2();
  }
  getInfoFromService3() {
    this.infoReceive1 = this.service.getInfo3();
  }
  clear() {
    this.infoReceive1 = [];
    // this.infoReceive2 = [];
    // this.infoReceive3 = [];
  }
  constructor(private service: DataService) {}

  ngOnInit(): void {}
}
