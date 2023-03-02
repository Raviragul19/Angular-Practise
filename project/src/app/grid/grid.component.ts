import { Component, OnInit } from '@angular/core';
import { RawDataService } from '../raw-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  public items: any = [];
  public isLoad: boolean = false;

  constructor(private rawData: RawDataService) {}

  ngOnInit() {
    this.isLoad = true;
    this.rawData.getRawData();
    this.rawData.userObservable$.subscribe((data) => {
      //console.log(this.items);
      this.items = data;
      this.isLoad = false;
    });
  }
}
