import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpserviceService } from './httpservice.service';
import { ListStore } from '.././state/store';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  //public users: BehaviorSubject<any> = new BehaviorSubject(null);
  //public userObservable$: Observable<any> = this.users.asObservable();

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
  addRawData(details: any) {
    this.dataService
      .addData(details)
      .pipe(tap((user: any) => this.store.add(user)))
      .subscribe();
  }
  editRawData(user: any) {
    this.dataService
      .editData(user)
      .pipe(
        tap((user: any) => {
          this.store.upsert(user.id, user);
          console.log(this.store);
        })
      )
      .subscribe();
  }
  deleteRawData(user: any) {
    this.dataService
      .deleteData(user)
      .pipe(
        tap((user: any) => {
          this.store.remove(user.id);
        })
      )
      .subscribe();
  }
}
