import { Component, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';
import { ListQuery } from './state/query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'akitastore';

  selectedValue: string = '';
  department = [
    { value: 'CSE', viewValue: 'CSE' },
    { value: 'EIE', viewValue: 'EIE' },
    { value: 'IT', viewValue: 'IT' },
  ];

  constructor(private input: MatDialog, public studentQuery: ListQuery) {}

  openDialog(): any {
    const dialogRef = this.input.open(AddComponent, {
      data: {},
    });
  }

  data() {
    this.studentQuery.value = this.selectedValue;
  }
  
}
