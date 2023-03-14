import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    public dialogRef: MatDialogRef<DeleteComponent>,
    private service: DataserviceService
  ) {}

  inputData() {
    console.log(this.data.id);
    this.service.deleteRawData(this.data.id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
