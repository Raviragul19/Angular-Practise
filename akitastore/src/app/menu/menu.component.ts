import { Component, Input } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() city: string = '';
  @Input() department: string = '';

  constructor(private input: MatDialog) {}

  openEdit() {
    const dialogRef = this.input.open(AddComponent, {
      data: { id: this.id, name: this.name, city: this.city ,department: this.department },
    });    
  }
  

  openDelete() {
    const dialogRef = this.input.open(DeleteComponent, {
      data: { id: this.id },
    });
  }
}
