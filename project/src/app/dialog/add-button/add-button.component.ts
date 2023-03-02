import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddInputsComponent } from '../add-inputs/add-inputs.component';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})

export class AddButtonComponent {
  id: number = 0;
  name: string = '';
  native:string = '';
  constructor(private input: MatDialog) {}

  openDialog(): any {
    const dialogRef = this.input.open(AddInputsComponent, {
      //data: { id: this.id, name: this.name },
      data:{}
    });
  }
  
}
