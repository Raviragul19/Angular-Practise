import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'akitastore';

  constructor(private input: MatDialog) {}
  openDialog(): any {
    const dialogRef = this.input.open(AddComponent, {
      //data: { id: this.id, name: this.name },
      data: {},
    });
  }
}
