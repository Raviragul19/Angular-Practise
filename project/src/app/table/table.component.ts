import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {  RawDataService } from '../raw-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

export class TableComponent implements OnInit {

  public isLoad: boolean = false;
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = [];

  constructor(private rawData: RawDataService) {}

  ngOnInit() {
    this.isLoad = false;
    this.rawData.getRawData();
    this.rawData.userObservable$.subscribe((data) => {
      this.dataSource.data = data;
      this.isLoad = false;
    });
    this.displayedColumns = ['id', 'avatar', 'name', 'native', 'menu'];
  }
  
}
