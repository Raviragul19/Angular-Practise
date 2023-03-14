import { QueryEntity } from '@datorama/akita';
import { ListStore } from './store';
import { list } from '../list';
import { Observable } from 'rxjs';
import { Injectable, Query } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListQuery extends QueryEntity<list[]> {
  constructor(private studentStore: ListStore) {
    super(studentStore);
  }
  allState$: Observable<any> = this.selectAll();
}
