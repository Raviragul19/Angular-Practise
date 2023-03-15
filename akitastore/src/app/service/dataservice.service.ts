import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpserviceService } from './httpservice.service';
import { ListStore } from '.././state/store';
import { Students } from '../studentsdata';

export interface addType {
  city: string | null | undefined;
  name: string | null | undefined;
  department:string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  constructor(
    private dataService: HttpserviceService,
    private store: ListStore
  ) {}

  getRawData() {
    this.dataService
      .getData()
      .pipe(tap((user: any) => this.store.set(user)))
      .subscribe();
  }

  addRawData(details: addType) {
    this.dataService
      .addData(details)
      .pipe(tap((user: Students) => this.store.add(user)))
      .subscribe();
  }

  editRawData(user: Students) {
    console.log(user);
    this.dataService
      .editData(user)
      .pipe(
        tap((user: Students) => {
          this.store.upsert(user.id, user);
        })
      )
      .subscribe();
  }

  deleteRawData(user: number) {
    this.dataService
      .deleteData(user)
      .pipe(
        tap(() => {
          this.store.remove(user);
        })
      )
      .subscribe();
  }

  
}
