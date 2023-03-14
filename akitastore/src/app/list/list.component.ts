import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { ListQuery } from '../state/query';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public data: any = [];
  public isLoad: boolean = false;

  constructor(
    private rawData: DataserviceService,
    public studentQuery: ListQuery
  ) {}

  ngOnInit() {
    this.rawData.getRawData();
    this.studentQuery.allState$.subscribe((res) => {
      this.data = res;
    });
  }
}
