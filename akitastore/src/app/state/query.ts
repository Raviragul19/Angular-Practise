import { QueryEntity } from '@datorama/akita';
import { ListStore } from './store';
import { Students } from '../studentsdata';
import { Observable } from 'rxjs';
import { Injectable, Input} from '@angular/core';
//import{AppComponent} from '../app.component'

@Injectable({
  providedIn: 'root',
})

export class ListQuery extends QueryEntity<Students[]> {
  constructor(private studentStore: ListStore,
    //private data:AppComponent
    ) {
    super(studentStore);
  }
  allState$: Observable<unknown[]> = this.selectAll();


  @Input() value: string='';
  SearchState$: Observable<unknown> = this.selectAll({
    filterBy: (entity: any) => entity.department === 'CSE'
  });
}
