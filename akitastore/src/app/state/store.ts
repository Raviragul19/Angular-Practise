import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { list } from '../list';

const intialListState: list[] = [
  {
    id: '',
    name: '',
    city: '',
  },
];

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'list' })
export class ListStore extends EntityStore<list[]> {
  constructor() {
    super(intialListState);
  }
}
