import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';

export interface DialogData {
  city: string | null | undefined;
  id: number;
  name: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData,
    private formBuild: FormBuilder,
    public service: DataserviceService
  ) {}

  public temp: number = 0;

  onNoClick(): void {
    this.dialogRef.close();
  }

  registeration = this.formBuild.group({
    city: ['', Validators.required],
    name: ['', Validators.required],
  });

  ngOnInit(): void {
    // if data is provided, prefill the form fields for editing
    if (this.data) {
      this.registeration.patchValue({
        city: this.data.city,
        name: this.data.name,
      });
    }
  }

  saveData() {
    let details = {
      id: this.data.id,
      city: this.registeration.get('city')?.value,
      name: this.registeration.get('name')?.value,
    };
    this.temp = 0;
    if (this.data.id !== undefined) {
      this.temp = 0;
      console.log(details);
      // editing existing data
      this.service.editRawData(details);
    } else {
      // adding new data
      console.log(details);
      this.service.addRawData(details);
    }

    this.dialogRef.close();
  }
}
