import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { DataService } from './data.service';

export interface editType {
  id: number;
  native: string | null | undefined;
  name: string | null | undefined;
  picture: string;
}

@Injectable({
  providedIn: 'root',
})
export class RawDataService {
  public users: BehaviorSubject<any> = new BehaviorSubject(null);
  public userObservable$: Observable<any> = this.users.asObservable();

  constructor(private dataService: DataService) {}
  getRawData() {
    this.dataService
      .getData()
      .pipe(tap((user) => this.users.next(user)))
      .subscribe();
  }

  addRawData(user: editType) {
        console.log(user);
       this.dataService
      .addData(user)
      .pipe(
        tap((user) => {
          const availableUsers = this.users.getValue();
          availableUsers.push(user);
          this.users.next(availableUsers);
        })
      )
      .subscribe();
  }

  editRawData(user: editType) {
    console.log(user);
    this.dataService
      .editData(user)
      .pipe(
        tap((user: any) => {
          const availableUsers = this.users.getValue();
          const index = availableUsers.findIndex(
            (key: any) => key.id === user.id
          );
          availableUsers[index] = user;
          this.users.next(availableUsers);
        })
      )
      .subscribe();
  }

  deleteRawData(usersId: number) {
    this.dataService
      .deleteData(usersId)
      .pipe(
        tap((user: any) => {
          let availableUsers = this.users.getValue();
          availableUsers = availableUsers.filter(
            (key: any) => key.id !== user.id
          );
          // console.log(availableUsers);
          this.users.next(availableUsers);
        })
      )
      .subscribe();
  }
}
