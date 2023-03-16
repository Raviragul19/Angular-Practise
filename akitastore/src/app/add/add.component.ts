import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';
import { Students } from '../studentsdata';

// export interface DialogData {
//   id: string;
//   name: string;
//   city: string;
// }

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})

export class AddComponent {

  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Students,
    private formBuild: FormBuilder,
    public service: DataserviceService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  registeration = this.formBuild.group({
    city: ['', Validators.required],
    name: ['', Validators.required],
    department: ['', Validators.required],
  });

  ngOnInit(): void {
    if (this.data) {
      this.registeration.patchValue({
        city: this.data.city,
        name: this.data.name,
        department:this.data.department,
      });
    }
  }

  saveData() {
    let details = {
      id: this.data.id,
      city: this.registeration.get('city')?.value,
      name: this.registeration.get('name')?.value,
      department: this.registeration.get('department')?.value,
    };    
    if (this.data.id !== undefined) {
      this.service.editRawData(details);
    } else {
      this.service.addRawData(details);
    }
    this.dialogRef.close();
  }
}
