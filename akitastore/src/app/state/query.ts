import { QueryEntity } from '@datorama/akita';
import { ListStore } from './store';
import { Students } from '../studentsdata';
import { Observable } from 'rxjs';
import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class ListQuery extends QueryEntity<Students[]> {

  value:string='';

  constructor(private studentStore: ListStore,
    ) {
    super(studentStore);
  }
  
  allState$: Observable<unknown[]> = this.selectAll();  //displaying all value

  
  SearchState$: Observable<any> = this.selectAll({            //displaying only selected value
    filterBy: (entity: any) => entity.department === this.value });

  
}
