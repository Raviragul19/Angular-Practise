import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { ListQuery } from '../state/query';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public data: any = [];

  constructor(
    private rawData: DataserviceService,
    public studentQuery: ListQuery
  ) {}

  ngOnInit() {
    this.rawData.getRawData();
    this.studentQuery.SearchState$.subscribe((res) => {
      this.data = res;
    });
  }
}
