import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Students } from '../studentsdata';

const intialListState: Students[] = [
  {
    id: '',
    name: '',
    city: '',
    department:''
  },
];

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'Students' })
export class ListStore extends EntityStore<Students[]> {
  constructor() {
    super(intialListState);
  }

}
