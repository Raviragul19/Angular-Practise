import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddButtonComponent } from '../add-button/add-button.component';
import { FormBuilder, Validators } from '@angular/forms';
import { faker } from '@faker-js/faker';
import { DataService } from 'src/app/data.service';
import { RawDataService } from 'src/app/raw-data.service';

export interface DialogData {
  native: string | null | undefined;
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-inputs',
  templateUrl: './add-inputs.component.html',
  styleUrls: ['./add-inputs.component.scss'],
})
export class AddInputsComponent {
  constructor(
    public dialogRef: MatDialogRef<AddButtonComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData,
    private formBuild: FormBuilder,
    public service: RawDataService
  ) {}

  public temp: number = 0;

  onNoClick(): void {
    this.dialogRef.close();
  }

  registeration = this.formBuild.group({
    native: ['',Validators.required],
    name: ['', Validators.required],
    
  });

  ngOnInit(): void {
    // if data is provided, prefill the form fields for editing
    if (this.data) {
      this.registeration.patchValue({
        native: this.data.native,
        name: this.data.name,
      });
    }
  }


  saveData() {
    let details = {
      id: this.data.id,
      native: this.registeration.get('native')?.value,
      name: this.registeration.get('name')?.value,
      picture: faker.image.avatar(),
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

