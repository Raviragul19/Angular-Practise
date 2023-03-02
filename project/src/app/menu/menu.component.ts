import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { AddInputsComponent } from '../dialog/add-inputs/add-inputs.component';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent {

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() native: string = '';

  constructor(private input: MatDialog) {}

  openEdit() {
    const dialogRef = this.input.open(AddInputsComponent, {
      data: { id: this.id, name: this.name, native: this.native },
    });
  }

  openDelete() {
    const dialogRef = this.input.open(DeleteComponent, {
      data: { id: this.id },
    });
  }
  
}
